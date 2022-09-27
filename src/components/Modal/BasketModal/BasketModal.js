import React, { useState } from "react";
import ProductDetails from "../../Products/ProductDetails";
import "./BasketModal.css";

const BasketModal = () => {
  const [count, setCount] = useState(() => 1);
  const [openProduct, setOpenProduct] = useState(false);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleProductInfo = () => {
    setOpenProduct(true);
  };
  return (
    <>
      <div className="modal">
        <div className="modal-body">
          <div className="modal-content">
            <div className="basket-nav">
              <span className="title">Basket</span>
              <span className="cancel-btn">
                <button>Cancel</button>
              </span>
            </div>
            <div className="the-items">
              <span className="item-brief-info">
                <img
                  onClick={handleProductInfo}
                  className="product-image"
                  src="https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg"
                  alt=""
                />
                {openProduct && (
                  <ProductDetails
                    count={count}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                  />
                )}
                <div className="price-product-info">
                  <span>Description</span>
                  <span>R24.99</span>
                  <div className="add-more-box">
                    <span className="count" onClick={handleIncrement}>
                      +
                    </span>
                    <span>{count}</span>
                    <span className="countDown" onClick={handleDecrement}>
                      -
                    </span>
                  </div>
                </div>
              </span>
              <span className="item-brief-info">
                <img
                  className="product-image"
                  src="https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg"
                  alt=""
                />
                <div className="price-product-info">
                  <span>Description</span>
                  <span>R24.99</span>
                  <div className="add-more-box">
                    <span className="count" onClick={handleIncrement}>
                      +
                    </span>
                    <span>{count}</span>
                    <span className="countDown" onClick={handleDecrement}>
                      -
                    </span>
                  </div>
                </div>
              </span>
              <span className="item-brief-info">
                <img
                  className="product-image"
                  src="https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg"
                  alt=""
                />
                <div className="price-product-info">
                  <span>Description</span>
                  <span>R24.99</span>
                  <div className="add-more-box">
                    <span className="count" onClick={handleIncrement}>
                      +
                    </span>
                    <span>{count}</span>
                    <span className="countDown" onClick={handleDecrement}>
                      -
                    </span>
                  </div>
                </div>
              </span>
              <span className="item-brief-info">
                <img
                  className="product-image"
                  src="https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg"
                  alt=""
                />
                <div className="price-product-info">
                  <span>Description</span>
                  <span>R24.99</span>
                  <div className="add-more-box">
                    <span className="count" onClick={handleIncrement}>
                      +
                    </span>
                    <span>{count}</span>
                    <span className="countDown" onClick={handleDecrement}>
                      -
                    </span>
                  </div>
                </div>
              </span>
              <span className="item-brief-info">
                <img
                  className="product-image"
                  src="https://cookingformysoul.com/wp-content/uploads/2022/05/mixed-berry-smoothie-2-min.jpg"
                  alt=""
                />
                <div className="price-product-info">
                  <span>Description</span>
                  <span>R24.99</span>
                  <div className="add-more-box">
                    <span className="count" onClick={handleIncrement}>
                      +
                    </span>
                    <span>{count}</span>
                    <span className="countDown" onClick={handleDecrement}>
                      -
                    </span>
                  </div>
                </div>
              </span>
            </div>
            <div className="modal-footer">
              <div className="order-total">
                <span>Order</span>
                <span>Total: R150.00</span>
              </div>
              <div className="total-checkout">
                <span className="basket-btn">
                  {" "}
                  <button>View Basket</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketModal;
