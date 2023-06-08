import { Router } from 'express';
import UserManager from '../DAO/UserDAO.js';
const usersRouter = Router();

const userManager = new UserManager();

usersRouter.get('/', async (req, res) => {
    let usuarios;
    try {
        usuarios = await userManager.getAllUsers()
    } catch (error) {
        res.status(404).send({status: "error", error})
    }
    let users = usuarios.map(elem => { 
        return {
            first_name: elem.first_name,
            last_name: elem.last_name,
            email: elem.email
        }
    })

    res.render('users', { users } )
    // res.send({ status: "success", payload: usuarios})
})

usersRouter.get('/:uid', async (req, res) => {
    let uid = req.params.uid;
    let usuario;
    try {
        usuario = await userManager.getUserById(uid)
    } catch (error) {
        res.status(404).send({status: "error", error})
    }
   
    res.send({ status: "success", payload: usuario})
})

usersRouter.get('/hbs', (req, res) => {
    let user =  {
        nombre: "user1",
        apellido: "ap1",
        edad: 25,
        telefono: "213123123"
    }
    res.render('datos', user)
})

usersRouter.post('/', async (req, res) => {
    let response;
    let { first_name, last_name, email } = req.body;
    if(!first_name || !last_name || !email) return res.send({ status: "error", error: "Incomplete values"})
    try {
        response = await userManager.addUser(first_name, last_name, email)
    } catch (error) {
        res.status(500).send({ status: "error", error})
    }
   
    res.send({ status: "success", payload: response})
})

usersRouter.put('/:uid', async (req, res) => {
    let uid = req.params.uid;
    let { first_name, last_name, email } = req.body;
    if(!first_name || !last_name || !email) return res.send({ status: "error", error: "Incomplete values"})
    let usuarioUpdated;
    try {
        usuarioUpdated = await userManager.updateUser(uid, { first_name, last_name, email })
    } catch (error) {
        res.status(500).send({ status: "error", error})
    }

    res.send({ status: "success", payload: usuarioUpdated})
})

export default usersRouter;