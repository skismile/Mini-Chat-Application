const http=require("http")
const express=require("express")
const cors=require("cors")
const socketIO =require("socket.io")
// const {Server} =require("socket.io")



const app=express()
app.use(cors())
const server=http.createServer(app)
const io= socketIO(server)
// const io= new Server(server)


io.on("connection",()=>{
console.log("new connect")

})


app.get('/',(req,res)=>{
    res.send("working")
})


server.listen(8081,()=>{

    console.log("connected 8081")
})