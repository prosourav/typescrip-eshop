import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductInterface } from "../redux/Constants/action-types";

const Product = () => {
  const product = useSelector((state: any) => state.allProducts.products);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {product.map((pd: ProductInterface) => {
        const { title, category, id, price, image } = pd;
        return (
          <div key={id} className="four wide column">
            <Link to={`/product/${id}`}>
              <div
                className="ui link cards"
                style={{ display: "flex", margin: "0 15px" }}
              >
                <div className="card">
                  <div className="image">
                    <img src={image} alt={title} style={{ height: "300px" }} />
                  </div>
                  <div className="content" style={{ height: "150px" }}>
                    <div className="header">{title}</div>
                    <div className="meta price">${price}</div>
                    <div className="meta">{category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
