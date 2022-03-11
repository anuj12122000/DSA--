const mongoose =require('mongoose');



//creating mongo db
const db_link = 'your_DB_LINK';

const connectdatabase =()=>{mongoose.connect(db_link)
    .then(function (db) {
        console.log("Db connected");
    })
    .catch(function (err) {
        console.log(err);
    });
}

module.exports = connectdatabase;
