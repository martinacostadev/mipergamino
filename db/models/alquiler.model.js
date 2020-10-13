import mongoose from 'mongoose'
const alquilerSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: {
        city: String,
        village: String,
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
        whatsapp: Boolean
    },
    createdAt: Date,
    updatedAt: Date,
    deleted: Boolean
},
    {
        collection: "alquiler",
        versionKey: false
    }
);

const Alquiler = mongoose.models.Alquiler || mongoose.model("Alquiler", alquilerSchema);

export default Alquiler