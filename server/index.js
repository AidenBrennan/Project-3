import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import apolloServerExpress from 'apollo-server-express';
import graphql from 'graphql';

//node express

const app = express();

//body-parser and cors

app.use(bodyParser.json ({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded ({ limit:"30mb", extended: true}));
app.use(cors());

//Mongodb


















// const express = require('express');
// const db = require('./config/connection');
// const routes = require('../routes');

// const PORT = process.env.PORT || 3001;
// 
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });