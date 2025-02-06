import React from 'react'
import Button from './Button'

export default function Product({name,image,price,description}) {
  const handelSave =()=>{
    alert("Save Button");
  }

  const handelDelete =()=>{
    alert("Delete Button");
  }
    const innerDiv = {
      border: "2px solid black",
      width: "220px",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center"
    }
    const img = {
      height:"150px"
    }
  return (
    <>
    
    <div style={innerDiv}>
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
