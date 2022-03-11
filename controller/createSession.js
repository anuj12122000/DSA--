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
    const exerciseSet = new exerciseSetModel({
      number: 2.01,
      suggestedReps: 2.01,
      performedRedps: 2.01,
    });

    await exerciseSet.save();

    //create exercise info schema
    const exerciseInfo = new exerciseInfoModel({
      name: "pushup",
    });

    await exerciseInfo.save();

    //create exercise
    const exercise = new exerciseModel({
      exerciseInfoRef: exerciseInfo,
      name: "anuj",
    });
    exercise.exerciseSets.push(exerciseSet);

    await exercise.save();

    //creating workout
    const workout = new workoutModel({
      exercises: [exercise],
    });

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
