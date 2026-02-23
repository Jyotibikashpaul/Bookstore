import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import Spinner from '../Component/Spinner'
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
function Home() {
  let [book, setBook] = useState([])
  let [loading, setLoading] = useState(true)
  useEffect(() => {
   
     if(loading)
      getusers()
    
    
    
  }, [loading])
  let getusers = () => {
    axios.get('http://127.0.0.7:5000/book/get/')
      .then((res) => {
        // console.log(res.data.allbooks);
        setBook(res.data.allbooks)
        setLoading(false)
        // console.log(book);
      }).catch((err) => {
        console.log(err);
        // setLoading(false)
      })
  }
  return (
    <>
      {/* <button onClick={getusers}>get</button> */}
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3x1 my-8'>Books List</h1>
          <Link to={'/book/create'}>
            <MdOutlineAddBox className='text-sky-800 text-4X1'></MdOutlineAddBox>
          </Link>
        </div>
        {loading ? (<Spinner></Spinner>)
          : (<table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Title</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
              </tr>
            </thead>
            <tbody>
              {book.map((ele, index) => {
               return( <tr key={book._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{ele.title}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{ele.author}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{ele.publishyear}</td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/book/show/${ele._id}`}>
                        <BsInfoCircle className='text-2x1 text-green-800'></BsInfoCircle>
                      </Link>
                      <Link to={`/book/edit/${ele._id}`}>
                        <AiOutlineEdit className='text-2x1 text-yellow-600'></AiOutlineEdit>
                      </Link>
                      <Link to={`/book/delete/${ele._id}`}>
                        <MdOutlineDelete className='text-2x1 text-red-600'></MdOutlineDelete>
                      </Link>
                    </div>
                  </td>
                </tr>)

              })}
            </tbody>
          </table>
          )}
      </div>
    </>

  )
}

export default Home