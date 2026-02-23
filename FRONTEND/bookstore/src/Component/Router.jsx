import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Navbar from './Navbar.jsx'
import Home from "../Pages/Home.jsx"
import Createbook from "../Pages/Createbook.jsx"
import Showbook from "../Pages/Showbook.jsx"
import Editbook from "../Pages/Editbook.jsx"
import Deletebook from "../Pages/Deletebook.jsx"
function Router() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar></Navbar> */}
    <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/book/create' element={<Createbook></Createbook>}/>
        <Route path='/book/show/:id' element={<Showbook></Showbook>}/>
        <Route path='/book/edit/:id' element={<Editbook></Editbook>}/>
        <Route path='book/delete/:id' element={<Deletebook></Deletebook>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default Router