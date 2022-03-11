const express = require("express");
const mongoose =require("mongoose");

const app = express();
app.listen(3000); 

const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const connectdatabase = require('../evolve challenge/config/connection');
connectdatabase();

const trainerRoute = require("../evolve challenge/Routes/trainerRoutes");
app.use("/trainer",trainerRoute);

const userRoute = require("../evolve challenge/Routes/userRoutes");
app.use("/user",userRoute);

const sessionRoute = require('../evolve challenge/Routes/sessionRoutes');
app.use("/session",sessionRoute);