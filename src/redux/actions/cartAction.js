import { ADD_PRODUCT_TO_CART } from "../constants/constant";




export const addProductToCart = (obj) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: obj
})