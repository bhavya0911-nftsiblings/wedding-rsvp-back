import { Guest } from "../models/guest.js";

export const save = async (req, res, next) => {
    try {
        console.log(req.body)
        const { names, emails, numbers, foodPrefs } = req.body;
        const numberOfGuests = names.length;
        for(let i = 0; i < numberOfGuests; i++) {
            await Guest.create({ name: names[i], phone_number: numbers[i], email: emails[i], food_pref: foodPrefs[i]});
        }
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
        res.status(200).json({
            success: true,
            message: "successful!",
            data: guests,
        });
    } catch (error) {
        next(error);
    }
}