import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Products: React.FC=()=>{
  return (
    <>
    <div>
        <input type='search' placeholder='search products'/>
    </div>
    <nav>
     {/* new and featured are diffrent pages */}
      <Link to='Featured'>Featured</Link>
      <Link to='new'>new</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products