import React, { useContext } from "react";
import VerifiedImage from "../dist/images/verified.png";
import "../dist/styles/checkoutProduct.css";
import { UserContext } from "./Basket";

const CheckoutProduct = (props) => {
  const { id, title, price, rating, image } = props;
  const dispatch = useContext(UserContext);

  const removeFromBasket = () => {
    dispatch({
      type: "decrement",
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
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="image" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
          <strong>{title}</strong>
        </p>
        <small className="stock">In stock</small> <br></br>
        <small className="free_shipping"> Eligible for FREE Shipping</small>
        <br></br>
        <img
          className="VerifiedImage"
          src={VerifiedImage}
          alt="verified product"
        />
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
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
