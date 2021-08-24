import { ProductInterface } from "./../Constants/action-types";
import { ActionTypes } from "../Constants/action-types";

export const setProducts = (allProducts: ProductInterface[]) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: allProducts,
  };
};

export const selectedProducts = (product: ProductInterface): object => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
