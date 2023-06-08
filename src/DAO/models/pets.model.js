import mongoose from "mongoose";

const petsCollection = 'mascotas';

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }
})

export const petModel = mongoose.model(petsCollection, PetSchema)