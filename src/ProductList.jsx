import React from "react";
import Product from "./Product";
// import Button from './Button';
import laptopImg from "./assets/laptop.png";
import smartPhone from "./assets/smartphone.png";
import headPhones from "./assets/headphones.jpeg";
export default function ProductList({theme}) {
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
  };
  const products = [
    {
      id: 1,
      name: "Laptop",
      image: laptopImg,
      price: 999,
      description: "High-performance laptop for work and gaming.",
    },
    {
      id: 2,
      name: "Smartphone",
      image: smartPhone,
      price: 699,
      description: "Feature-packed smartphone with amazing camera.",
    },
    {
      id: 3,
      name: "Headphones",
      image: headPhones,
      price: 199,
      description: "Noise-canceling wireless headphones.",
    },
  ];
  return (
    <div className={`p-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h2 style={{ textAlign: "center" }} className=" pt-5 text-xl font-bold">Product List</h2>
      <div style={container}>
        {products.map((pro) => (
          <Product
            key={pro.id}
            name={pro.name}
            image={pro.image}
            price={pro.price}
            description={pro.description}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}
