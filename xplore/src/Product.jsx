import React from "react";
import "./app.css";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const email = location.state?.email;
  return (
    <div>
      <div className="productContainer">
        <img
          className="imgContainer"
          src="https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-225092-anthem_hdframe4--default--1280.jpg"
          alt="display"
        />
      </div>
      <h1 className="welcome">WELCOME</h1>
      <h3 className="welcomes">{email}</h3>
    </div>
  );
};

export default Product;
