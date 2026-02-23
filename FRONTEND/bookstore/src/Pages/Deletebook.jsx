import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Spinner from '../Component/Spinner'
import Backbtn from '../Component/Backbtn'
import axios from 'axios'

function Deletebook() {
  let navigate=useNavigate()
  let {id}=useParams()
  let [loading,setLoading]=useState(true)
  let handeldelete=async(event)=>{
    try{
      event.preventDefault()
      if (loading){
        await axios.delete(`http://127.0.0.7:5000/book/delete/${id}`)
        setLoading(false)
        navigate('/')
      }else{
        setLoading(false)
      }
    }catch(err){
      console.log(err);
      
    }

  }
  return (
    <div className='p-4'>
      <Backbtn></Backbtn>
      <h1 className='text-3x1 my-4'>Delete book</h1>
      {!loading?(<Spinner></Spinner>):""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto'>
        <h3 className='text-2x1'>Are you sure you want to Delete it!!</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handeldelete}> Yes Delete</button>
      </div>
    </div>
  )
}

export default Deletebook