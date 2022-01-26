import api from "../../Api/api";
import { GET_PRODUCTS, ADD_MORE_PRODUCT } from "../constants/constant";

export const getProducts = (cardProducts) => ({
  type: GET_PRODUCTS,
  payload: cardProducts,
});

export const getMoreProduct = (number) => ({
  type: ADD_MORE_PRODUCT,
  payload: number,
});

export const fetchProducts = () => {
  return (dispatch) => {
    api.fetchAll().then((data) => dispatch(getProducts(data)));
  };
};
