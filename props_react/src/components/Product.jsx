import React from "react";

const Product = ({ name, price }) => {
  return (
    <div>
      <h1>Product Name: {name}</h1>
      <p>Product price: {price}</p>
    </div>
  );
};

export default Product;
