import mongoose from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

const alquilerSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: {
      village: String,
      city: String,
      province: String,
      zipCode: String,
    },
    isparticular: Boolean,
    warranties: Number,
    images: [String],
    price: Number,
    features: {
      bedrooms: Number,
      bathrooms: Number,
      garage: Boolean,
      exterior: Boolean,
      petsallowed: Boolean,
      childrenallowed: Boolean,
    },
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
    collection: "alquiler",
    versionKey: false,
  }
);

alquilerSchema.plugin(mongoosePaginate);

const Alquiler =
  mongoose.models.Alquiler || mongoose.model("Alquiler", alquilerSchema);

export default Alquiler;
