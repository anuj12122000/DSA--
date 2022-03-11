const trainerModel = require("../src/Trainer/trainer");

exports.addTrainer = async(req,res,next)=>{

    const{ name,email} = req.body;
    console.log(name+" "+email+" ");
    const a =  await trainerModel.create({
        name,
        email,
    })
   
        res.status(201).json({success:true});

}