import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    rsvp: {
        type: Boolean,
        required: true,
    },
});

export const Guest = mongoose.model("Guest", schema);