import { Router } from "express";
const router = Router();

import RequestLog from "../models/RequestLog.js";
import verifyToken from "../middleware/verifyToken.js";
import roleGuard from "../middleware/roleGuard.js";
import wrapAsync from "../utils/wrapAsync.js";
import matchService from "../services/matchService.js";

///////////////////////////////////////////////////////////
// CREATE REQUEST
///////////////////////////////////////////////////////////
router.post(
  "/",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  wrapAsync(async (req, res) => {

    const {
      requiredComponent,
      requiredBloodType,
      requestedQuantity,
      unitType,
      urgencyLevel,
      address,
      location,
      neededBy,
    } = req.body;

    // ✅ Validation
    if (!requiredBloodType || !requestedQuantity || !address || !location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (urgencyLevel && (urgencyLevel < 1 || urgencyLevel > 5)) {
      return res.status(400).json({
        success: false,
        message: "Urgency level must be between 1 and 5",
      });
    }

    const request = await RequestLog.create({
      requestedBy: req.user.id,
      requestedByEmp: req.user.id,
      requiredComponent,
      requiredBloodType,
      requestedQuantity,
      unitType,
      urgencyLevel,
      address,
      location,
      neededBy,
    });

    const matchedDonors = await matchService(request);

    res.status(201).json({
      success: true,
      data: request,
      matchedDonors,
    });
  })
);

///////////////////////////////////////////////////////////
// GET ALL REQUESTS
///////////////////////////////////////////////////////////
router.get(
  "/",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  wrapAsync(async (req, res) => {

    let query = {};

    // Role-based filter
    if (req.user.role === "Hospital") {
      query.requestedBy = req.user.id;
    }

    const { status, bloodType } = req.query;

    if (status) query.status = status;
    if (bloodType) query.requiredBloodType = bloodType;

    const requests = await RequestLog.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  })
);

///////////////////////////////////////////////////////////
// GET SINGLE REQUEST
///////////////////////////////////////////////////////////
router.get(
  "/:id",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  wrapAsync(async (req, res) => {

    const request = await RequestLog.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    // Ownership check
    if (
      req.user.role === "Hospital" &&
      request.requestedBy.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    res.status(200).json({
      success: true,
      data: request,
    });
  })
);

///////////////////////////////////////////////////////////
// UPDATE REQUEST
///////////////////////////////////////////////////////////
router.put(
  "/:id",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  wrapAsync(async (req, res) => {

    const { status, fulfilledQuantity } = req.body;

    const request = await RequestLog.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    // Ownership check
    if (
      req.user.role === "Hospital" &&
      request.requestedBy.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    // ✅ Status transition rules
    const validTransitions = {
      Pending: ["Approved", "Rejected", "Cancelled"],
      Approved: ["Partially Fulfilled", "Fulfilled", "Cancelled"],
      "Partially Fulfilled": ["Fulfilled"],
    };

    if (status && !validTransitions[request.status]?.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid transition from ${request.status} to ${status}`,
      });
    }

    // Update status
    if (status) request.status = status;

    // ✅ FIXED TYPO + LOGIC
    if (fulfilledQuantity !== undefined) {
      request.fulfilledQuantity = fulfilledQuantity;

      if (fulfilledQuantity >= request.requestedQuantity) {
        request.status = "Fulfilled";
        request.fulfilledAt = new Date();
      } else if (fulfilledQuantity > 0) {
        request.status = "Partially Fulfilled";
      }
    }

    await request.save();

    res.status(200).json({
      success: true,
      data: request,
    });
  })
);

///////////////////////////////////////////////////////////
// DELETE (CANCEL) REQUEST
///////////////////////////////////////////////////////////
router.delete(
  "/:id",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  wrapAsync(async (req, res) => {

    const request = await RequestLog.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    // Ownership check
    if (
      req.user.role === "Hospital" &&
      request.requestedBy.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    if (request.status === "Cancelled") {
      return res.status(400).json({
        success: false,
        message: "Already cancelled",
      });
    }

    request.status = "Cancelled";
    await request.save();

    res.status(200).json({
      success: true,
      message: "Request cancelled",
      data: request,
    });
  })
);

export default router;