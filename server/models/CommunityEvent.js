import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
  {
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    event: {
      type: String,
      maxlength: 100,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        default: undefined,
      },
    },
    targetGroup: {
      type: String,
      maxlength: 100,
      required: true,
    },
    partner: {
      type: String,
      maxlength: 100,
    },
    attendees: {
      type: Number,
      min: 0,
      default: 0,
    },
    bloodUnit: {
      type: Number,
      min: 0,
      default: 0,
    },
    feedback: {
      type: String,
      maxlength: 300,
    },
    followUpAction: {
      type: String,
      maxlength: 300,
    },
    status: {
      type: String,
      enum: ["Planned", "Ongoing", "Completed", "Cancelled"],
      default: "Planned",
    },
    organizedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CommunityEngagement", // ← which circle hosted this event
    },
    totalLifeSaved: {
      type: Number,
      default: 0,
      min: 0,
    },
    sponsors: [
      {
        name: String,
        contributionType: String,
        amount: Number,
      },
    ],
  },
  { timestamps: true },
);

communitySchema.index({ location: "2dsphere" });

const CommunityEvent = mongoose.model(
  "CommunityEvent",
  communitySchema,
);
export default CommunityEvent;
