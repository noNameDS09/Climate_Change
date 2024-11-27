// src/models/Document.js
import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "trial" }
);

// If there is no model already created, create a new one. Else, use the existing model.
const Document =
  mongoose.models.Document || mongoose.model("Document", documentSchema);

export default Document;
