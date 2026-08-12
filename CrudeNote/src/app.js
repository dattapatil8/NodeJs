const express=require("express")



const app= express()
app.use(express.json())

const notes=[]

app.post("/notes",(req,res)=>{
  notes.push(req.body)

  res.status(201).json({
    message:"Note Create Successfully"
  })
  
})
app.get("/notes",(req,res)=>{
    res.status(201).json({
        message :"Note fetching successfully",

        notes :notes
    })
  })

  app.delete("/notes/:index",(req,res)=>{
    const index=req.params.index
    delete notes[index]
    res.status(201).json({
     message :"Note delete successfully"
    })
  })

  app.patch("/notes/:index",(req,res)=>{
const index =req.params.index
const title=req.body.title

notes[index].title=title
res.status(200).json({
    message : "Note Update successfully"
})

  })

module.exports = app 