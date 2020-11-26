import express from 'express';
import path from 'path';
import bodyparser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import mongoose from 'mongoose';
import { database } from './config/db.js';
import  { passportdo } from './config/passport.js';

mongoose.connect(database,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true});

mongoose.connection.on('connected',()=> {
    console.log('Connected to database '+ database);
});

mongoose.connection.on('error',(err) => {
    console.log('Database error '+ database);
});
const app = express();

import users from './routes/userRoutes.js';

import patients from './routes/patientRoutes.js';

import tokens from './routes/invitationTokenRoutes.js';

import hospitals from './routes/hospRoutes.js';

const port = process.env.PORT || 8080;

app.use(cors());

const __dirname = path.resolve();
//Set static folder
app.use(express.static(path.join(__dirname ,'public/index.html')));

// body parser middleware

app.use(bodyparser.json());

//passport middlware

app.use(passport.initialize());
app.use(passport.session());


passportdo(passport);

app.use('/users',users);

app.use('/patients',patients);

app.use('/tokens',tokens);

app.use('/hospitals',hospitals);

//index route

app.get('/', (req, res)=> {
    res.send('Invalid Endpoint');

});
// start server

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.listen(port);
