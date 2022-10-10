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
        <span>
          {" "}
          <strong> R40</strong>
        </span>
        <span>Quantity:</span>
        <div className="add-product-box">
          <span className="count-up">+</span>
          <div className="number-item">
            <span>0</span>
          </div>
          <span className="count-down">-</span>
        </div>
        <button>Add To Cart</button>
        <span className="pro-detail">
          As a healthy food provider, we are happy to have helped thousands of
          people get their weight and health back on track by eating well
          portioned and healthy meals. It is a lifestyle we now live and preach
          to our clients, family, and friends every day.
        </span>
        <div className="social-media">
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
