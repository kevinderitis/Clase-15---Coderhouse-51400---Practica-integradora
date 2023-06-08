import { Router } from 'express';
import PetsManager from '../DAO/PetDAO.js';
const petsRouter = Router();

const petsManager = new PetsManager();

petsRouter.get('/', async (req, res) => {
    let pets;
    try {
        pets = await petsManager.getAllPets()
    } catch (error) {
        res.status(404).send({status: "error", error})
    }
   
    res.send({ status: "success", payload: pets})
})

export default petsRouter;