// import React from "react";
import React, { Component, createRef, useContext } from "react";
import "../dist/styles/product.css";
// import Star from "@material-ui/icons/Star";
import { UserContext } from "./Basket";

const Product = ({ id, title, price, rating, image }) => {
  const dispatch = useContext(UserContext);
  const addItem = () => {
    dispatch({
      type: "increment",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{title}</p>
        <div className="product_price">
          <small>Rs.</small>
          <strong> {price}</strong>
        </div>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p key={Math.floor(Math.random() * 100)}>⭐</p>
            ))}
        </div>
      </div>
      <div className="product_image">
        <img src={image} alt="image" />
      </div>
      <button onClick={addItem}>Add to Basket</button>
    </div>
  );
};

export default Product;
