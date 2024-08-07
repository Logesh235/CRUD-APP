const mongoose = require("mongoose")

const DB_URL = mongoose.connect('mongodb+srv://admin:admin@mern.bwds09g.mongodb.net/?retryWrites=true&w=majority&appName=MERN').then(result=>{console.log("DB Connected")})

const connection = () =>{
try{
    mongoose.connect(DB_URL)
    console.log("DB Connected Successfully..")
}
catch(e){
    console.log("Error in DB Connection")
}}

module.export = connection;