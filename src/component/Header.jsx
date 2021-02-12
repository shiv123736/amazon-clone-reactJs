import React from "react";
import amazonLogo from "../dist/images/amazon-logo.png";
import "../dist/styles/header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";
import { auth } from "./Firebase";
// import { Basket } from "./Basket";

const Header = (props) => {
  const { userName } = props;
  const handleLogin = () => {
    if (userName) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* amazon logo */}
      <Link to="/">
        <img className="header_logo" src={amazonLogo} alt="Amazon Logo" />
      </Link>

      {/* search box  */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links  */}
      <div className="header_links">
        <Link className="header_links_account" to={!userName && "/login"}>
          <div onClick={handleLogin} className="header_option">
            <span>Hello, {userName}</span>
            <div className="header_option_btm_txt">
              {!userName ? "Sign in" : "Sign out"}
            </div>
          </div>
        </Link>

        <div className="header_option">
          <span>Returns</span>
          <div className="header_option_btm_txt">& Orders</div>
        </div>

        <div className="header_option">
          <span>Try</span>
          <div className="header_option_btm_txt">Prime</div>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header_basket">
          <ShoppingCart className="header_shoppingCartIcon"></ShoppingCart>
          <div className="header_totalCartItems">
            <span>{props.basketValue}</span>
            <p>Cart</p>
          </div>
        </div>
      </Link>

      {/* one basket with number  */}
    </nav>
  );
};

export default Header;
