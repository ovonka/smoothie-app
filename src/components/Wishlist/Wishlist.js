import React from "react";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <>
      <div className="wish-list">
        <div className="header-titles">
          <span className="path-name">Home/Wishlist</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path d="m20 34.958-1.958-1.75q-4.334-3.958-7.167-6.833t-4.521-5.146Q4.667 18.958 4 17.104t-.667-3.771q0-3.791 2.563-6.354 2.562-2.562 6.312-2.562 2.334 0 4.334 1.062 2 1.063 3.458 3.021 1.625-2.042 3.583-3.062 1.959-1.021 4.209-1.021 3.75 0 6.312 2.562 2.563 2.563 2.563 6.354 0 1.917-.667 3.771-.667 1.854-2.354 4.125-1.688 2.271-4.521 5.146t-7.167 6.833Zm0-3.666q4.125-3.792 6.812-6.5 2.688-2.709 4.25-4.73 1.563-2.02 2.188-3.604.625-1.583.625-3.125 0-2.666-1.708-4.395-1.709-1.73-4.375-1.73-2.084 0-3.854 1.23-1.771 1.229-2.73 3.395h-2.416q-.959-2.125-2.73-3.375-1.77-1.25-3.854-1.25-2.666 0-4.375 1.73-1.708 1.729-1.708 4.395 0 1.584.625 3.167.625 1.583 2.188 3.625 1.562 2.042 4.25 4.729 2.687 2.688 6.812 6.438Zm0-12.042Z" />
            </svg>
          </span>
          <span>
            <h1>My Wishlist</h1>
          </span>
        </div>
        <div className="item-price-detail">
          <div className="detail-wishlist">
            <span>Product Name</span>
            <span>Unit price</span>
            <span>Stock Status</span>
            <span></span>
          </div>
          <div className="item-detail">
            <span className="img-dlt">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
              </svg>
              <img
                src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                alt=""
              />
              <span className="item-tag">Strawbery Triple deck</span>
            </span>
            <span className="price-of-product">R159.99</span>
            <span className="stock-of-product">In Stock</span>
            <span className="add-to-cart">
              {" "}
              <button>Add To Cart</button>{" "}
            </span>
          </div>
          <div className="item-detail">
            <span className="img-dlt">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
              </svg>
              <img
                src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                alt=""
              />
              <span className="item-tag">Strawbery Triple deck</span>
            </span>
            <span className="price-of-product">R159.99</span>
            <span className="stock-of-product">In Stock</span>
            <span className="add-to-cart">
              {" "}
              <button>Add To Cart</button>{" "}
            </span>
          </div>
          <div className="item-detail">
            <span className="img-dlt">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
              </svg>
              <img
                src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                alt=""
              />
              <span className="item-tag">Strawbery Triple deck</span>
            </span>
            <span className="price-of-product">R159.99</span>
            <span className="stock-of-product">In Stock</span>
            <span className="add-to-cart">
              {" "}
              <button>Add To Cart</button>{" "}
            </span>
          </div>
          <div className="item-detail">
            <span className="img-dlt">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
              </svg>
              <img
                src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                alt=""
              />
              <span className="item-tag">Strawbery Triple deck</span>
            </span>
            <span className="price-of-product">R159.99</span>
            <span className="stock-of-product">In Stock</span>
            <span className="add-to-cart">
              {" "}
              <button>Add To Cart</button>{" "}
            </span>
          </div>
          <div className="item-detail">
            <span className="img-dlt">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
              </svg>
              <img
                src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                alt=""
              />
              <span className="item-tag">Strawbery Triple deck</span>
            </span>
            <span className="price-of-product">R159.99</span>
            <span className="stock-of-product">In Stock</span>
            <span className="add-to-cart">
              {" "}
              <button>Add To Cart</button>{" "}
            </span>
          </div>
          <div className="item-detail">
            <span className="img-dlt">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
              </svg>
              <img
                src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1462829771-sunshine-daydream.jpg"
                alt=""
              />
              <span className="item-tag">Strawbery Triple deck</span>
            </span>
            <span className="price-of-product">R159.99</span>
            <span className="stock-of-product">In Stock</span>
            <span className="add-to-cart">
              {" "}
              <button>Add To Cart</button>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
