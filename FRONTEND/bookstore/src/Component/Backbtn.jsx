import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io"
import { useNavigate } from 'react-router-dom'
function Backbtn() {
    let navigate=useNavigate()
    let backbtn = () => {
        navigate('/')
      }
  return (
    <>
     <button onClick={backbtn} className="bg-sky-800 text-white px-5 py-1 rounded-lg w-fit"><IoMdArrowRoundBack></IoMdArrowRoundBack></button>
    </>
  )
}

export default Backbtn