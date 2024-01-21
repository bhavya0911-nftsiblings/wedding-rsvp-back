import { Guest } from "../models/guest.js";

export const save = async (req, res, next) => {
    try {
        const { name, number, rsvp } = req.body;
        await Guest.create({ name, number, rsvp });
        res.status(200).json({
            success: true,
            message: "successful!",
        });
    } catch (error) {
        next(error);
    }
}

export const read = async (req, res, next) => {
    try {
        let guests = await Guest.find({});
        let rsvpGuest = []
        let nonRsvpGuest = []
        guests.map((guest) => {
            if(guest.rsvp) {
                rsvpGuest.push(guest)
            }
            else {
                nonRsvpGuest.push(guest)
            }
        })
        console.log(rsvpGuest)
        console.log(nonRsvpGuest)
        res.status(200).json({
            success: true,
            message: "successful!",
            rsvp: rsvpGuest,
            nonRsvp: nonRsvpGuest,
        });
    } catch (error) {
        next(error);
    }
}