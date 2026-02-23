
import axios from "axios"
import { useEffect, useState } from 'react'
import {  useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Spinner from "../Component/Spinner"
import Backbtn from "../Component/Backbtn"
function Showbook() {
  let [book, setBook] = useState({})
  let [loading, setLoading] = useState(true)
  let { id } = useParams()

  useEffect(() => {
    if (loading) {
      getone()
    }
  }, [loading])

  let getone = async () => {
    let data = await axios.get(`http://127.0.0.7:5000/book/get/${id}`)
    console.log(data);
    setBook(data.data.message)
    console.log(book);
    
    setLoading(false)

  }
  return (
    <>
    
      <div className="p-4">
        <Backbtn></Backbtn>
        <h1 className="text-3x1 my-4">Showbook</h1>
        {loading ? (<Spinner></Spinner>) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4">
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
              
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Publish Year </span>
              <span>{book.publishyear}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Create Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Update time</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}
      </div>

    </>
  )
}

export default Showbook