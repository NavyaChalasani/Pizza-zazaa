
const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://myAtlasDBUser:Rin@myatlasclusteredu.lrhhlj7.mongodb.net/zazaa'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose