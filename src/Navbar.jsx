import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar({links,name}) {
    console.log(links,name,"my link");
  return (
    <>
      <nav className="bg-green-100 flex flex-wrapwrap justify-between items-center h-15 w-full px-10 ">
        <div className='cursor-pointer text-xl font-bold'>{name}</div>
        <div className='flex flex-wrap gap-10 cursor-pointer'>
        {links.map((ele) => (
          <span key={ele.path}>
            <Link to={ele.path}>{ele.name}</Link>
          </span>
        ))}

        </div>
      </nav>
    </>
  )
}
