import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    food_pref: {
        type: String,
        required: true,
    },
});

export const Guest = mongoose.model("Guest", schema);