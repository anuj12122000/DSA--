const mongoose =require('mongoose');



//creating mongo db
const db_link = 'mongodb+srv://admin:5uelq3UIOZWddrXp@cluster0.yq9gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectdatabase =()=>{mongoose.connect(db_link)
    .then(function (db) {
        console.log("Db connected");
    })
    .catch(function (err) {
        console.log(err);
    });
}

module.exports = connectdatabase;
