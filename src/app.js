const express = require("express")


const app = express()

app.use(express.json())

const notes = []

//POST /notes
app.post("/notes",(req,res)=>{
  console.log(req.body);
  notes.push(req.body)
  console.log(notes);
  
  
  res.status(201).json({
    message:"Note created successfully"
  })
})
//GET/notes
app.get("/notes",(req,res)=>{
  res.send(notes)
})

//Delete /notes
app.delete("/notes/:index",(req,res)=>{
  delete notes [req.params.index] 
  res.status(200).json({
    message:"Notes deleted successfully"
  })
})

//PATCH /notes
app.patch("/notes/:index",(req,res)=>{
  notes [req.params.index].description = req.body.description
  res.status(200).json({
    message:"Note updated successfully"
  })
})



module.exports = app