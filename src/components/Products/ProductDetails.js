import React from "react";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const { count, handleIncrement, handleDecrement } = props;
  return (
    <div className="product-details">
      <img
        className="product-image-details"
        src="https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg"
        alt=""
      />
      <div className="detailed-info">
        <span className="product-title">Strawberry deluxe Smoothie</span>
        <div className="ingredients">
          <span> Ingredients: </span>
          <span>
            aims to make our clients lives easier, making everyday living
            healthier and more efficient by delivering packaged ready to eat
            meals to your doorstep. Our team has developed a healthy yet
            delicious way of cooking using natural herbs and spices making every
            dish unique
          </span>
        </div>
        <div className="info-btn-quantity">
          <div className="add-more-box">
            <span className="count" onClick={handleIncrement}>
              +
            </span>
            <span>{count}</span>
            <span className="countDown" onClick={handleDecrement}>
              -
            </span>
          </div>
          <div className="price-quantity">
            <span>R45</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
