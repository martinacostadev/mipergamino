import mongoose from "mongoose";
const extravioSchema = new mongoose.Schema(
  {
    type: String,
    title: String,
    description: String,
    location: {
      city: String,
      village: String,
      street: String,
      streetnumber: String,
    },
    images: [String],

    user: {
      name: String,
      phonenumber: String,
      whatsapp: Boolean,
    },
    createdAt: Date,
    updatedAt: Date,
    deleted: Boolean,
  },
  {
    collection: "extravio",
    versionKey: false,
  }
);

const Extravio =
  mongoose.models.Extravio || mongoose.model("Extravio", extravioSchema);

export default Extravio;
