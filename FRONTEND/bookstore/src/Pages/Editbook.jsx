import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Backbtn from '../Component/Backbtn'
import Spinner from '../Component/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
function Editbook() {
  //form handdling
  let [title, setTitle] = useState('')
  let [author, setAuthor] = useState('')
  let [publishyear, setPublishyear] = useState()
  let [loading, setLoading] = useState(true)
  let navigate = useNavigate()
  let { id } = useParams()
  useEffect(() => {
    if (loading) {
      getone()
    }
  }, [loading])
  let getone = async () => {
    try {
      let res = await axios.get(`http://127.0.0.7:5000/book/get/${id}`)
      setTitle(res.data.message.title)
      setAuthor(res.data.message.author)
      setPublishyear(res.data.message.publishyear)
    }catch(err){
      console.log(err);
      
    }
  }

  let handelpublishyear = (e) => {
    if (e.target.value.length > 4) {
      alert("invalid year")
    }
    setPublishyear(e.target.value)
  }
  let handleEdit = (event) => {
    event.preventDefault()
    let obj = {
      title,
      author,
      publishyear
    }
    if (!obj.title || !obj.author || !obj.publishyear) {
      alert("Fill all Fields Before submiting")
    } else {
      if (loading) {
        axios.put(`http://127.0.0.7:5000/book/put/${id}`, obj)
          .then((res) => {
            console.log(res);
            setLoading(false)
            navigate('/')
          }).catch((err) => {
            console.log(err);

          })
      }
    }

  }
  return (
    <>
      <div className='p-4'>
        <Backbtn></Backbtn>
        {!loading ? (<Spinner></Spinner>) : ""}

        <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
          <h1 className='text-3x1 my-4'>Edit Book</h1>
          <div className='my-4'>
            <label htmlFor="name" className='text-xl mr-4 text-gray-500'>Title</label>
            <input type="text" className='border-2 border-gray-500 px-4 py-2 w-full' name="title" id='name' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='my-4'>
            <label htmlFor="author" className='text-xl mr-4 text-gray-500'>Author</label>
            <input type="text" className='border-2 border-gray-500 px-4 py-2 w-full' id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className='my-4'>
            <label htmlFor="publish" className='text-xl mr-4 text-gray-500'>Publishyear</label>
            <input type="number" className='border-2 border-gray-500 px-4 py-2 w-full' id='publish' name="publishyear" value={publishyear} onChange={handelpublishyear} />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEdit}>submit</button>
        </div>
      </div>
    </>
  )
}

export default Editbook