const express=require("express")
const app=express()
const path=require("path")
app.use(express.json())
app.use(express.static(path.join(__dirname),{index:false}))
app.get("/",(req,res)=>{
    req.sendFile(path.join(__dirname),"/index.html")
})
app.listen(5000,()=>{
    console.log("server running")
})