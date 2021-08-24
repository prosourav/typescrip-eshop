import axios from "axios";
import React, { useEffect } from "react";
import { setProducts } from "../redux/Actions/productAction";
import { useDispatch } from "react-redux";
import Product from "./Product";

const Shop = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response: any = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
    // console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Product />
    </div>
  );
};

export default Shop;
