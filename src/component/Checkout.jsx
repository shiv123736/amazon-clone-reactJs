import { ListItemSecondaryAction } from "@material-ui/core";
import React from "react";
import AdImage from "../dist/images/ad.png";
import GuranteePic from "../dist/images/gurantee.png";
import "../dist/styles/checkout.css";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = (props) => {
  const basket = props.basket.basket;
  //   console.log(props.BasketInfo);
  return (
    <div className="checkout">
      <img src={AdImage} alt="ad image" />
      <div>
        <p className="amazon_pay">
          <strong>
            Pay faster for all your shopping needs{" "}
            <span style={{ color: "#B72222" }}>with Amazon Pay balance</span>{" "}
          </strong>
          <br></br>
          Get Instant refund on cancellations | Zero payment failures
        </p>

        <div className="checkout_cartANDsubtotal">
          <div className="checkout_items">
            {basket.length === 0 ? (
              <div>
                <h1>Your Basket is Empty</h1>
                <p>
                  You have no items in the your basket. To buy one or more
                  items, click "Add to Basket" next to the item.
                </p>
              </div>
            ) : (
              <div className="shopping_cart">
                <h2 className="checkout_title">Shopping Cart</h2>
                <hr></hr>
                {basket.map((item) => (
                  <div>
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      image={item.image}
                    />
                    <hr></hr>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="checkout_subtotal">
            <img src={GuranteePic} alt="image" />
            <div className="checkout_totalprice">
              <p>
                Subtotal ({basket.length} items): Rs.
                <strong>
                  {" "}
                  {basket?.reduce(
                    (amount, item) => parseInt(item.price) + amount,
                    0
                  )}
                </strong>{" "}
              </p>
              <button>Proceed to Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
