import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isVegDropDown, setIsVegDropDown] = useState(false);
  const [isSpiceDropDown, setIsSpiceDropDown] = useState(false);

  const handleDropDownClick = () => {
    if (isDropDown) {
      setIsDropDown(false);
    } else {
      setIsDropDown(true);
    }
  };
  const handleVegDropDownClick = () => {
    if (isVegDropDown) {
      setIsVegDropDown(false);
    } else {
      setIsVegDropDown(true);
    }
  };
  const handleSpiceDropDownClick = () => {
    if (isSpiceDropDown) {
      setIsSpiceDropDown(false);
    } else {
      setIsSpiceDropDown(true);
    }
  };
  return (
    <>
      <div className="products-header">
        <img
          src="https://assets.recipes.prod.wpsandwatch.com/var/kaapi/storage/images/0/1/8/1/1811810-1-eng-GB/kale_smoothie_wallpaper_vip_header_image.jpg"
          alt=""
        />
      </div>
      <div className="filter-products">
        <div className="filter">
          <span onClick={handleDropDownClick}>
            FRUITS{" "}
            {isDropDown ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.062 13 5 11.938l5-5 5 5L13.938 13 10 9.062Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" />
              </svg>
            )}
          </span>
          <div
            className="fruits style"
            style={{ display: isDropDown ? "block" : "none" }}
          >
            <ul>
              <li>
                {" "}
                <input type="checkbox" name="Apricot" /> Apricot
              </li>
              <li>
                <input type="checkbox" name="Bannana" />
                Bannana
              </li>
              <li>
                <input type="checkbox" name="Beet" />
                Beet
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Blueberry" /> Blackberry{" "}
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Coconut" />
                Coconut
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Cranberrry" /> Cranberrry{" "}
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Grapefruit" /> Grapefruit{" "}
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Honeydew" /> Honeydew{" "}
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Kiwi" /> Kiwi
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Lemon" />
                Lemon
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Mango" /> Mango
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Mixed" /> Mixed
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Peach" /> Peach
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Pomrgranate" /> Pomrgranate{" "}
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Raspberry" /> Raspberry
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Strawberry" /> Strawberry
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Watermelon" />
                Watermelon
              </li>
            </ul>
          </div>
          <span onClick={handleVegDropDownClick}>
            VEGETABLES{" "}
            {isVegDropDown ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.062 13 5 11.938l5-5 5 5L13.938 13 10 9.062Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" />
              </svg>
            )}
          </span>
          <div
            className="vegetables style"
            style={{ display: isVegDropDown ? "block" : "none" }}
          >
            <ul>
              <li>
                {" "}
                <input type="checkbox" name="Avocado" /> Avocado
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Cauliflower" /> Cauliflower
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Carrots" /> Carrots
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Sweet Potato" /> Sweet Potato
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Peas" /> Peas
              </li>
            </ul>
          </div>
          <span onClick={handleSpiceDropDownClick}>
            SPICE{" "}
            {isSpiceDropDown ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="M6.062 13 5 11.938l5-5 5 5L13.938 13 10 9.062Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" />
              </svg>
            )}
          </span>
          <div
            className="spice style"
            style={{ display: isSpiceDropDown ? "block" : "none" }}
          >
            <ul>
              <li>
                {" "}
                <input type="checkbox" name="Cinnamon" />
                Cinnamon
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Apple Pie City" />
                Apple Pie Spice
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Cayenne Spice" />
                Cayenne Spice
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Ginger" />
                Ginger
              </li>
              <li>
                {" "}
                <input type="checkbox" name="Tumeric" />
                Tumeric
              </li>
            </ul>
          </div>
        </div>
        <div className="products">
          <span className="product-sort">
            {" "}
            <label for="sort">Sort By:</label>
            <select>
              <option value="Best-selling"> Best Selling</option>
              <option value="Alphabet"> Alphabetical Order</option>
              <option value="Prices"> Prices</option>
            </select>
          </span>
          <div className="product-grid">
            <div className="product-item">
              <Link to="/products/1">
                <span className="image-border">
                  {" "}
                  <img
                    src="https://png.pngitem.com/pimgs/s/139-1394446_chia-berry-collagen-smoothie-water-bottle-hd-png.png"
                    alt=""
                  />
                </span>
              </Link>
              <div className="item-details">
                <span>
                  {" "}
                  <strong>Stawberry Passion</strong>
                </span>
                <span>Rating</span>
                <span>
                  {" "}
                  <strong>R44.99</strong>
                </span>
                <button className="product-btn">Add To Cart</button>
              </div>
            </div>
            <div className="product-item">
              <span className="image-border">
                {" "}
                <img
                  src="https://png.pngitem.com/pimgs/s/139-1394446_chia-berry-collagen-smoothie-water-bottle-hd-png.png"
                  alt=""
                />
              </span>
              <div className="item-details">
                <span>
                  {" "}
                  <strong>Stawberry Passion</strong>
                </span>
                <span>Rating</span>
                <span>
                  {" "}
                  <strong>R44.99</strong>
                </span>
                <button className="product-btn">Add To Cart</button>
              </div>
            </div>
            <div className="product-item">
              <span className="image-border">
                {" "}
                <img
                  src="https://png.pngitem.com/pimgs/s/139-1394446_chia-berry-collagen-smoothie-water-bottle-hd-png.png"
                  alt=""
                />
              </span>
              <div className="item-details">
                <span>
                  {" "}
                  <strong>Stawberry Passion</strong>
                </span>
                <span>Rating</span>
                <span>
                  {" "}
                  <strong>R44.99</strong>
                </span>
                <button className="product-btn">Add To Cart</button>
              </div>
            </div>
            <div className="product-item">
              <span className="image-border">
                {" "}
                <img
                  src="https://png.pngitem.com/pimgs/s/139-1394446_chia-berry-collagen-smoothie-water-bottle-hd-png.png"
                  alt=""
                />
              </span>
              <div className="item-details">
                <span>
                  {" "}
                  <strong>Stawberry Passion</strong>
                </span>
                <span>Rating</span>
                <span>
                  {" "}
                  <strong>R44.99</strong>
                </span>
                <button className="product-btn">Add To Cart</button>
              </div>
            </div>
            <div className="product-item">
              <span className="image-border">
                {" "}
                <img
                  src="https://png.pngitem.com/pimgs/s/139-1394446_chia-berry-collagen-smoothie-water-bottle-hd-png.png"
                  alt=""
                />
              </span>
              <div className="item-details">
                <span>
                  {" "}
                  <strong>Stawberry Passion</strong>
                </span>
                <span>Rating</span>
                <span>
                  {" "}
                  <strong>R44.99</strong>
                </span>
                <button className="product-btn">Add To Cart</button>
              </div>
            </div>
            <div className="product-item">
              <span className="image-border">
                {" "}
                <img
                  src="https://png.pngitem.com/pimgs/s/139-1394446_chia-berry-collagen-smoothie-water-bottle-hd-png.png"
                  alt=""
                />
              </span>
              <div className="item-details">
                <span>
                  {" "}
                  <strong>Stawberry Passion</strong>
                </span>
                <span>Rating</span>
                <span>
                  {" "}
                  <strong>R44.99</strong>
                </span>
                <button className="product-btn">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
