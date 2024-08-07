const express = require('express')
const cors = require('cors')
const { Connection } = require('./db/db')
const { router } = require('./routes/router')
const studentModel = require('./models/model')

const app = express()
app.use(express.json())
app.use(cors())

Connection;

app.post("/addStudent", async (req,res)=>{
    const newUser = new studentModel(req.body.inputs);
    try{
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
})

app.get("/getAll", async(req,res)=>{
    try{
        let students = await studentModel.find()
        res.status(200).json(students)
    }
    catch(e){
        console.log("Server catched error :",e)
        res.send(404).json({message:e.message})
    }
})

app.put("/updateStudent/:id",async(req,res)=>{
    try{
            await studentModel.findById(req.params.id).then(student=>{
            student.name = req.body.name ;
            student.age = req.body.age ;
            student.save().then(()=>{
                res.json("Updated")
            }).catch(e=>res.status(404).json(`Errorr : ${e}`))
        }).catch(e=>res.status(404).json(`Errorr : ${e}`))
    }
    catch(e){
        console.log("Error : ",e)
    }
})

app.delete("/deleteStudent/:id", async (req,res)=>{
    await studentModel.findByIdAndDelete(req.params.id).then(()=>{
        res.json("Player record ha been deleted.");
    }).catch(e=>{
        res.status(404).json(`Error : ${e}`)
    })
})


app.listen(3001,()=>{
    console.log("App is listening at port 3001")
})