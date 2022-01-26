import React from "react";
import Button from "../Button/button";
import Basket from "../../assets/img/basket.svg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <div className="header__logo-wrap">
              <h1>IrwhiteRoom</h1>
              <p>Feel yourself as a queen</p>
            </div>
          </Link>
        </div>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button button--cart">
              <span>0 грн</span>
              <div className="button__delimiter"></div>
              <img width={18} height={18} src={Basket} alt="basket-icon"></img>
              <span>0</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
