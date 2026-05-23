import mongoose from "mongoose";
const CommunityEngagement = new mongoose.Schema(
  {
    circleName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    circleType: {
      type: String,
      enum: ["College", "Workplace", "Local Club", "NGO", "Other"],
      required: true,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Donor",
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Disbanded"],
      default: "Active",
    },
    city: { type: String, maxlength: 50, trim: true },
    district: { type: String, maxlength: 50, trim: true },
    state: { type: String, maxlength: 50, trim: true },
    members: [
      {
        donorId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Donor",
          required: true,
        },
        joinedOn: { type: Date, default: Date.now },
        role: { type: String, enum: ["Admin", "Member"], default: "Member" },
      },
    ],
    totalDonations: { type: Number, default: 0, min: 0 },
    totalUnitsGiven: { type: Number, default: 0, min: 0 },
    lifeSaved: { type: Number, default: 0, min: 0 }, // totalUnitsGiven * 3
    leaderboardRank: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true },
);

CommunityEngagement.path("members").validate(function (members) {
  const ids = members.map((m) => m.donorId.toString());
  return ids.length === new Set(ids).size;
}, "A donor can only join a circle once");

const Circle = mongoose.model("CommunityEngagement", CommunityEngagement);
export default Circle;
