import bodyParser from 'body-parser';
import moongose from 'mongoose';
import documentsRoutes from './routes/documents.js';
import ownersRoutes from './routes/owners.js';
import usersRoutes from './routes/users.js';
import { castErrorHandler, validationErrorsHandler } from './middlewares/errorsHandler.js'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.set('port', 8080)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/documents', documentsRoutes);
app.use('/owners', ownersRoutes);
app.use('/users', usersRoutes);
app.get('*', (req, res) => res.status(404).send());

// middlewares
app.use(castErrorHandler)
app.use(validationErrorsHandler)

// database
moongose.connect('mongodb://127.0.0.1:27017/crowdar-challenge').then(() => console.log('DB is connected'));


// server
app.listen(app.get('port'), () => console.log('Escuchando en puerto ' + app.get('port')));
