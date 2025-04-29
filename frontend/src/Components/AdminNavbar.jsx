import React from 'react'
import {Link} from "react-router-dom"

function AdminNavbar() {
  return (
    <div className='h-[80px] '>
        <nav className='flex justify-between items-center h-full '>
        <div className='text-3xl font-bold pl-12'><p>Admin</p></div>
        <Link to={"/"}><div className='pr-12 text-yellow-600 font-bold'>Userpanel</div></Link>
        </nav>
    </div>
  )
}

export default AdminNavbar