import React from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  return (
    <div className="background-img">
      <div className="shop-cart">
        <div className="cart-container">
          <div className="shop-headers">
            <div className="cart-titles">
              <span className="redirect">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="M10 16.083 3.917 10 10 3.917l1.229 1.229L7.25 9.125h8.833v1.75H7.25l3.979 3.979Z" />
                </svg>
                Continue Shopping
              </span>
              <span className="shopping-cart-header">
                {" "}
                <strong> Shopping Cart</strong>
              </span>
              <span>You have 3 items in your cart</span>
            </div>
            <span className="sort-by">
              <label for="list select">Sort by:</label>{" "}
              <select className="select-outline">
                <option value="price">Price</option>
                <option value="name">Name</option>
                <option value="quantity">Quantity</option>
              </select>
            </span>
          </div>

          <div className="list-of-items">
            <div className="item-cart">
              <div className="item-photo">
                <span>
                  <img
                    src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div className="name-descript">
                <span className="item-name">Orange Deluxe</span>
                <span>300ml</span>
              </div>
              <div className="add-box">
                <span className="count">+</span>
                <div className="number-item">
                  <span>0</span>
                </div>
                <span className="countDown">-</span>
              </div>
              <span className="cart-item-price">R59</span>
              <span className="dlt-btn">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
                </svg>
              </span>
            </div>
            <div className="item-cart">
              <div className="item-photo">
                <span>
                  <img
                    src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div className="name-descript">
                <span className="item-name">Orange Deluxe</span>
                <span>300ml</span>
              </div>
              <div className="add-box">
                <span className="count">+</span>
                <div className="number-item">
                  <span>0</span>
                </div>
                <span className="countDown">-</span>
              </div>
              <span className="cart-item-price">R59</span>
              <span className="dlt-btn">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
                </svg>
              </span>
            </div>
            <div className="item-cart">
              <div className="item-photo">
                <span>
                  <img
                    src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div className="name-descript">
                <span className="item-name">Orange Deluxe</span>
                <span>300ml</span>
              </div>
              <div className="add-box">
                <span className="count">+</span>
                <div className="number-item">
                  <span>0</span>
                </div>
                <span className="countDown">-</span>
              </div>
              <span className="cart-item-price">R59</span>
              <span className="dlt-btn">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
                </svg>
              </span>
            </div>
            <div className="item-cart">
              <div className="item-photo">
                <span>
                  <img
                    src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div className="name-descript">
                <span className="item-name">Orange Deluxe</span>
                <span>300ml</span>
              </div>
              <div className="add-box">
                <span className="count">+</span>
                <div className="number-item">
                  <span>0</span>
                </div>
                <span className="countDown">-</span>
              </div>
              <span className="cart-item-price">R59</span>
              <span className="dlt-btn">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="summary-content">
            <span className="summary-title">Summary</span>
            <div className="summary-item-price">
              <span>Items: 3</span>
              <span>R200</span>
            </div>
            <form className="cart-form">
              <div className="delivery-opt">
                <label for="delivery-options">Delivery</label>
                <select>
                  <option value="">Standard-Delivery - R60</option>
                  <option value="">Same-day-Delivery - R90</option>
                </select>
              </div>
              <div className="coupon-code">
                <span className="code-title"> Give Code</span>
                <span>
                  {" "}
                  <input
                    className="c-input"
                    type="text"
                    minlength="4"
                    maxlength="6"
                    placeHolder="Enter Code"
                  />
                  <input type="checkbox" />
                </span>
              </div>
            </form>
            <footer className="shop-footer">
              <div className="total-price">
                <span>Total Price:</span>
                <span>R499.99</span>
              </div>
              <button className="checkout-btn">Checkout</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
