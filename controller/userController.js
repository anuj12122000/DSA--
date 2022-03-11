const trainerModel = require("../src/Trainer/trainer");
const userModel = require("../src/User/user");
const mongoose = require("mongoose");

exports.addUser = async (req, res, next) => {
  try {
    const { email, name, gender, DOB, phone, trainerId } = req.body;

    const trainer = await trainerModel.findOne({ id: trainerId });

    const a = new userModel({
      email,
      name,
      gender,
      DOB,
      phone,
      trainerRef: trainer,
    });

    await a.save();

    await trainer.userRefs.push(a);
    await trainer.save();

    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).send(err);
  }
};
