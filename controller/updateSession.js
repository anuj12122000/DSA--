const express = require('express');
const mongoose = require("mongoose");
const sessionSchema = require('../src/Workoutpnp/session');
const sessionModel = mongoose.model('sessionModel',sessionSchema);
const exerciseSetSchema = require('../src/Workoutpnp/exerciseSet');
const exerciseSetModel = mongoose.model('exerciseSetModel',exerciseSetSchema);

const updateSession = async(req,res,next)=>{

try{
    
        // getting session id
    const sessionId = req.params.id;

   
    //getting Session
    const session = await sessionModel.findById(sessionId);
    //console.log(session);

      //getting first exercise first set ID
     const firstExerciseSetId = session.workout.exercises[0].exerciseSets[0]._id;

     

     //getting my set
     const settobeupdated = await exerciseSetModel.findById(firstExerciseSetId);
     console.log(settobeupdated);
    

    await exerciseSetModel.findByIdAndUpdate(firstExerciseSetId, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
       
    })


}catch(err){
    console.log(err);
    res.status(500).json({err});
}


}

module.exports = updateSession;