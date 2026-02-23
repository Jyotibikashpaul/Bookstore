import express from 'express'
import dbconnect from './db/db.js'
import bookrouter from './router/bookrouter.js'
import cors from 'cors'
let app=express()
let port=5000
let hostname='127.0.0.7'
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
// app.use(cors({origin:'http://localhost:5173/',
//     methods:["GET","POST","PUT","DELETE"]
// }))
app.get('/',(req,res)=>{
    res.send('hii')
    
})
app.use('/book',bookrouter)
 app.listen(port,hostname,()=>{
    console.log(`server started at http://${hostname}:${port}`);
    dbconnect()
 })