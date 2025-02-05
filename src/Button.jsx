import React from 'react'

export default function Button({label,onClick}) {
    const style = {
        height:"30px",
        width:"70px",
        border:"2px solid black",
        borderRadius:"20px",
        bacgroundColor:"black",
        fontWeight:"bold",
        marginLeft:"5px"
    }
  return (
    <>
      <button style={style} onClick={onClick}>{label}</button>
    </>
  )
}