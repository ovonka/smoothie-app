import React from "react";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="smoothie-detail">
      <div className="smoothie-image">
        <span className="item-border">
          {" "}
          <img
            src="https://png.pngitem.com/pimgs/s/139-1394446_chia-berry-collagen-smoothie-water-bottle-hd-png.png"
            alt=""
          />
        </span>
      </div>
      <div className="description">
        <h3>Strawberry Cinnamon Shake</h3>
        <span>rating</span>
        <span>R40</span>
        <span>Quantity</span>
      </div>
    </div>
  );
};

export default ProductDetails;
