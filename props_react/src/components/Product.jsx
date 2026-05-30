import React from "react";

const Product = (props) => {
  return (
    <div>
      <h1>Product Name: {props.name}</h1>
      <p>Product price: {props.price}</p>
    </div>
  );
};

export default Product;
