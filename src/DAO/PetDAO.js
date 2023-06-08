import { petModel } from './models/pets.model.js';

class PetsManager {
    constructor(){
        this.model = petModel;
    }

    async getAllPets(){
        let pets;
        try {
            pets = await this.model.find()
        } catch (error) {
            throw error;
            console.log(error)
        }
    
        return pets;
     }
}

export default PetsManager;