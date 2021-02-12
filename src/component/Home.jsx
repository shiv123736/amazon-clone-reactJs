import React from "react";
import HomeBanner from "../dist/images/banner3.jpg";
import Product1 from "../dist/product_images/ptron2.jpg";
import TV from "../dist/product_images/tv.JPG";
import Machine from "../dist/product_images/lg.JPG";
import Iphone from "../dist/product_images/iphone.JPG";
import Bajaj from "../dist/product_images/bajaj.JPG";

import Product from "./Products";
import "../dist/styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <img className="home_image" src={HomeBanner} alt="Banner" />

      <div className="home_row">
          <Product
            id="123"
            title="Apple iPhone X (256GB) - Space Grey"
            price="43999"
            rating={5}
            image={Iphone}
          />
        <Product
          id="124"
          title="Bajaj Flora Instant 3 Litre Vertical Water Heater, White (Free installation from brand)"
          price="2359"
          rating={5}
          image={Bajaj}
        />
      </div>
      <div className="home_row">
        <Product
          id="125"
          title="Alexa Echo Dot (3rd gen)"
          price="2399"
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
          id="126"
          title="Smart Fitness Band"
          price="999"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="127"
          title="Lifelong Swing 5.0 Kg Fully-Automatic Top Loading Washing Machine (LLATWM07, White)"
          price="9990"
          rating={5}
          image={Machine}
        />
      </div>
      <div className="home_row">
        <Product
          id="128"
          title="Samsung - 34-inch Premium Curved Monitor with 21:9 Wide Screen, USB Type C Connectivity & Ultra WQHD Resolution - LC34H890WJWXXL"
          price="82340"
          rating={5}
          image={TV}
        />
      </div>
    </div>
  );
};

export default Home;
