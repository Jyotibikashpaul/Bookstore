import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/book/create'}>Create</NavLink>
    <NavLink to={'/book/show/:id'}>Show</NavLink>
    <NavLink to={'/book/edit/:id'}>Edit</NavLink>
    <NavLink to={'/book/delete/:id'}>Delete</NavLink>
    </>
  )
}

export default Navbar