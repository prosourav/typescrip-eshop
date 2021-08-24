import { combineReducers } from "redux";
import { pdDetailReducer, pdReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: pdReducer,
  selectedProduct: pdDetailReducer,
});
export default reducers;

// export type RootState = ReturnType<typeof reducers>;
