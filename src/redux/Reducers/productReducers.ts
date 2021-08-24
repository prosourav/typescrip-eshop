import { ProductInterface } from "./../Constants/action-types";
import { ActionTypes } from "../Constants/action-types";

const initialState = {
  products: [],
};

type ActionInterface = {
  type: string;
  payload: ProductInterface[];
};

export const pdReducer = (
  state = initialState,
  { type, payload }: ActionInterface
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const pdDetailReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
