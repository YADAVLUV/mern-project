const mongoose = require('mongoose');
const mongoURI = "mongodb://27017/medico";

const connectToMongo = () =>{
    mongoose.connect(mongoURI);
}

module.exports = connectToMongo;