import React, { useEffect } from "react";
import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProducts,
  selectedProducts,
} from "../redux/Actions/productAction";
import { ProductInterface } from "../redux/Constants/action-types";

const ProductDetail = () => {
  const { productId } = useParams() as {
    productId: string;
  };
  const dispatch = useDispatch();

  const product: ProductInterface = useSelector(
    // need to improve
    (state: { selectedProduct: any }) => state.selectedProduct.products
  );

  const fetchDetails = async () => {
    const response: any = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err: AxiosError) => {
        console.log("Err", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchDetails();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {!product ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
