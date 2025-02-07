import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar({links,name,toggle,theme}) {
    console.log(links,name,"my link");
  return (
    <>
      <nav className={`flex flex-wrapwrap justify-between items-center h-15 w-full px-10 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`} >
        <div className='cursor-pointer text-xl font-bold'>{name}</div>
        <div className='flex flex-wrap gap-10 cursor-pointer'>
        {links.map((ele) => (
          <span key={ele.path}>
            <Link to={ele.path}>{ele.name}</Link>
          </span>
        ))}
        <button
        onClick={toggle}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
        </div>
      </nav>
    </>
  )
}
