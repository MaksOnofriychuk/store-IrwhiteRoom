import { GET_PRODUCTS } from "../constants/constant";
import { CHOSE_A_CATEGORY } from "../constants/constant";
import { CHOSE_A_SORTBY } from "../constants/constant";
import { ADD_MORE_PRODUCT } from "../constants/constant";
import { ADD_PRODUCT_TO_CART } from "../constants/constant";

const initialState = {
  cardProducts: [],
  category: null,
  sortBy: "",
  visibleProduct: 6,
  cartItems: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        cardProducts: action.payload,
      };

    case CHOSE_A_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case CHOSE_A_SORTBY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case ADD_MORE_PRODUCT:
      return {
        ...state,
        visibleProduct: state.visibleProduct + action.payload,
      };

    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};

export default productReducer;
