import { userModel } from './models/user.model.js';

class UserManager {
    constructor(){
        this.model = userModel;
    }

 async getAllUsers(){
    let usuarios;
    try {
      usuarios = await this.model.find()
    } catch (error) {
        throw error;
        console.log(error)
    }

    return usuarios;
 }

 async getUserById(id){
    let usuario;
    try {
      usuario = await this.model.findOne({ _id: id})
    } catch (error) {
        throw error;
        console.log(error)
    }

    return usuario;
 }

 async addUser(first_name, last_name, email){
    let usuario;
    try {
        usuario = await userModel.create({
            first_name,
            last_name,
            email
        });
    } catch (error) {
        console.log(error);
    }
    return usuario;
 }

 async updateUser(uid, properties){
    let usuario
    try {
        usuario = await userModel.updateOne({ _id: uid }, properties);
    } catch (error) {
        console.log(error);
    }
    return usuario;
 }
}

export default UserManager;