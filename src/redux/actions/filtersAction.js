import {
  CHOSE_A_CATEGORY,
  CHOSE_A_SORTBY,
  
} from "../constants/constant";

export const setCategory = (categoryIndex) => ({
  type: CHOSE_A_CATEGORY,
  payload: categoryIndex,
});

export const setSortBy = (types) => ({
  type: CHOSE_A_SORTBY,
  payload: types,
});
