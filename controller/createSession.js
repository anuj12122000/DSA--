const mongoose = require("mongoose");
const userModel = require("../src/User/user");
const sessionSchema = require("../src/Workoutpnp/session");
const workoutSchema = require("../src/Workoutpnp/workout");
const exerciseSchema = require("../src/Workoutpnp/exercise");
const exerciseSetSchema = require("../src/Workoutpnp/exerciseSet");
const exerciseInfoSchema = require("../src/Admin/exerciseinfo");

const sessionModel = mongoose.model("sessionModel", sessionSchema);
const exerciseSetModel = mongoose.model("exerciseSetModel", exerciseSetSchema);
const exerciseInfoModel = mongoose.model("exerciseInfoModel",exerciseInfoSchema);
const exerciseModel = mongoose.model("exerciseModel", exerciseSchema);
const workoutModel = mongoose.model("workoutModel", workoutSchema);

const createSession = async (req, res, next) => {
  try {
    //get user id
    const userId = req.params.id;

    //get user from database
    const user = await userModel.findById(userId);
    //get trainer ref
    const trainerRef = user.trainerRef;

    //create exercise Set
    const exerciseSet1 = new exerciseSetModel({
      number: 2.01,
      suggestedReps: 2.01,
      performedRedps: 2.01,
    });

    await exerciseSet1.save();

    const exerciseSet2 = new exerciseSetModel({
      number: 2.01,
      suggestedReps: 2.01,
      performedRedps: 2.01,
    });

    await exerciseSet2.save();


    const exerciseSet3 = new exerciseSetModel({
      number: 2.01,
      suggestedReps: 2.01,
      performedRedps: 2.01,
    });

    await exerciseSet3.save();



    //create exercise info schema
    const exerciseInfo1 = new exerciseInfoModel({
      name: "pushup",
    });

    await exerciseInfo1.save();


    

    //create exercise
    const exercise1 = new exerciseModel({
      exerciseInfoRef: exerciseInfo1,
      name: "anuj",
    });

    exercise1.exerciseSets.push(exerciseSet1);
    exercise1.exerciseSets.push(exerciseSet2);
    exercise1.exerciseSets.push(exerciseSet3);

    await exercise1.save();



     
    const exerciseSet4 = new exerciseSetModel({
      number: 2.01,
      suggestedReps: 2.01,
      performedRedps: 2.01,
    });

    await exerciseSet4.save();

    const exerciseSet5 = new exerciseSetModel({
      number: 2.01,
      suggestedReps: 2.01,
      performedRedps: 2.01,
    });

    await exerciseSet5.save();


    const exerciseSet6 = new exerciseSetModel({
      number: 2.01,
      suggestedReps: 2.01,
      performedRedps: 2.01,
    });

    await exerciseSet6.save();

    const exerciseInfo2 = new exerciseInfoModel({
      name: "squat",
    });

    await exerciseInfo2.save();
   


    const exercise2 = new exerciseModel({
      exerciseInfoRef: exerciseInfo2,
      name: "anuj",
    });

    exercise2.exerciseSets.push(exerciseSet4);
    exercise2.exerciseSets.push(exerciseSet5);
    exercise2.exerciseSets.push(exerciseSet6);

    await exercise2.save();


    //creating workout
    const workout = new workoutModel({
      // exercises: [exercise1,exercise2],
    });
        workout.exercises.push(exercise1);
        workout.exercises.push(exercise2);
    await workout.save();


    //creating main session()
    const newSession = new sessionModel({
      workout: workout,
      date: Date.now(),
      userRef: user,
      trainerRef: trainerRef,
    });

    await newSession.save();

    user.sessions.push(newSession);

    await user.save();

    console.log("hityted");
    res.status(201).json({ message: "saved" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

module.exports = createSession;
