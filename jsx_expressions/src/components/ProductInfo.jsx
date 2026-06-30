import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 12000,
    availability: "In stock",
  };
  return (
    <div>
      <h1>Name: {product.name}</h1>
      <p>Price: {product.price}</p>
      <i>Availability: {product.availability}</i>
    </div>
  );
};

export default ProductInfo;
