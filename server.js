const { urlencoded } = require("body-parser")
const express=require("express")
const app=express()
const apiFetch=require("./controller/apiFetch")
const path=require("path")
require("dotenv").config()
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","/index.html"))
})
app.get("/apiFetch",apiFetch)
app.listen(5000,(req,res)=>{
    console.log("server started")
})