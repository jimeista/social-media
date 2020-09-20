import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Social Media</h1>
      <Link to='/'>Posts</Link>
    </div>
  )
}
