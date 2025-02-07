import React from 'react'
import Button from './Button'

export default function Product({name,image,price,description,theme}) {
  const handelSave =()=>{
    alert("Save Button");
  }

  const handelDelete =()=>{
    alert("Delete Button");
  }
    const innerDiv = {
      
      width: "220px",
      padding: "10px",
     
      textAlign: "center"
    }
    const img = {
      height:"150px"
    }
  return (
    <>
    
    <div style={innerDiv} className={` border-2 border-black rounded ${theme === "dark" ? "bg-gray-800 text-white border-2 border-gray-100" : " text-black"}`}>
    <img src={image} alt={name} style={img} />
        <h2>{name}</h2>
        
        <p> Description - {description}</p>
        <p>Price - {price}</p>
        <Button label="save" onClick={handelSave} />
        <Button label="Delete" onClick={handelDelete} />
    </div>
    </>
  )
}
