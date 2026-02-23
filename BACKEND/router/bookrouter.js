import express from "express"
import { postbook,getbooks,getonebook,updatebook, deletebook } from "../controller/bookcontroller.js"
let bookrouter=express.Router()
bookrouter.get('/',(req,res)=>{
    res.send('bookrouter is working')
    
})
bookrouter.post('/post',postbook)
bookrouter.get('/get',getbooks)
bookrouter.get("/get/:id",getonebook)
bookrouter.put('/put/:id',updatebook)
bookrouter.delete('/delete/:id',deletebook)
export default bookrouter