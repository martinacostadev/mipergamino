import mongoose from 'mongoose'
const empleoSchema = new mongoose.Schema({
    area: String,
    type: String,
    currency: String,
    salary: Number,
    level: String,
    schedule: String,
    contractType: String,
    title: String,
    description: String,
    location: {
        city: String,
        village: String,
        street: String,
        streetnumber: String
    },
    images: [String],
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
        collection: "empleo",
        versionKey: false
    }
);

const Empleo = mongoose.models.Empleo || mongoose.model("Empleo", empleoSchema);

export default Empleo