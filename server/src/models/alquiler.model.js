const mongoose = require('mongoose');
const alquilerSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: {
        city: String,
        village: String,
    },
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

const Alquiler = mongoose.model("Alquiler", alquilerSchema);
module.exports = Alquiler;