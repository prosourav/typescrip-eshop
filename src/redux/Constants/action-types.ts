export const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SELECTED_PRODUCT: "SELECTED_PRODUCT",
  REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
};

export type ProductInterface = {
  category: string;
  description: string;
  id: number;
  price: number;
  title: string;
  image: string;
};
