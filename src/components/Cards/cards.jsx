import React, { useEffect } from "react";
import Card from "../Card/card";
import Button from "../Button/button";
// import api from "../../Api/api";
import "./cards.scss";
import { useSelector } from "react-redux";
import {
  fetchProducts,
  getMoreProduct,
} from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";

const Cards = () => {
  const dispatch = useDispatch();
  const { cardProducts, visibleProduct } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleMoreProduct = () => {
    dispatch(getMoreProduct(6));
  };

  return (
    <>
      <div className="content__items">
        {cardProducts
          ? cardProducts.slice(0, visibleProduct).map((cardProduct) => (
              <div key={cardProduct._id}>
                <Card cardProduct={cardProduct} />
              </div>
            ))
          : "Loading..."}
      </div>
      <div className="content__button">
        <Button
          onClick={handleMoreProduct}
          className="button button--add button--more"
        >
          Показать еще
        </Button>
      </div>
    </>
  );
};

export default Cards;
