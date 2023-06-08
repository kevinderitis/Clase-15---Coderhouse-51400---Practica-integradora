import mongoose from "mongoose";

const usersCollection = 'usuarios';

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
})

export const userModel = mongoose.model(usersCollection, UserSchema)