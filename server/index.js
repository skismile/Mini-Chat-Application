const http=require("http")
const express=require("express")
const cors=require("cors")
const {Server} =require("socket.io")



const app=express()
const server=http.createServer(app)

const io= new Server(server)


app.get('/',(req,res)=>{
    res.send("working")
})


server.listen(8080,()=>{

    console.log("connected 8080")
})