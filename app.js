import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import usersRouter from './src/routes/users.js';
import petsRouter from './src/routes/pets.js';

const app = express();

mongoose.connect('mongodb+srv://coderhouse:coder123456@coderhouse.z88zdi9.mongodb.net/coder?retryWrites=true&w=majority')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine());
app.set('views', './views');
app.set('view engine', 'handlebars')

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

const server = app.listen(8080, () => console.log(`Server running on port: ${server.address().port}`));
server.on('error', error => console.log(error))