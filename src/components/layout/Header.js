import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import BasketModal from "../Modal/BasketModal/BasketModal";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClickedOn, setIsClickedOn] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleSearchIconClick = () => {
    setIsClickedOn(true);
  };
  const handleOutsideInputClick = () => {
    setIsClickedOn(false);
  };
  return (
    <header className="navbar">
      {/* // LOGO // */}
      <Link to="/home">
        <span className="icon-logo">
          <img
            className="logo-image"
            src="https://images.vexels.com/media/users/3/156993/isolated/lists/1a877082e9f3a9a7b06de5b0c8b47666-smoothie-cup-icon.png"
            alt=""
          />
          <motion.h1
            className="logo"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 45 }}
          >
            Smoothie
          </motion.h1>
        </span>
      </Link>
      {/* //NAVBAR// */}
      <motion.nav
        className="nav-area"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/products"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "tween" }}
          >
            {" "}
            PRODUCTS
          </motion.div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/about-us"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "tween" }}
          >
            {" "}
            ABOUT US
          </motion.div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/login"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "tween" }}
          >
            LOGIN
          </motion.div>
        </NavLink>
      </motion.nav>
      {/* //NAVBAR ICONS// */}
      <motion.div
        className="info-area"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="tooltip">
          <span className="product-info-icon">
            {isClickedOn ? (
              <OutsideClickHandler onOutsideClick={handleOutsideInputClick}>
                <input type="text" placeHolder="Search" />
              </OutsideClickHandler>
            ) : (
              // SVG ICON
              <motion.svg
                whileHover={{ scale: 1.3 }}
                transition={{ type: "tween" }}
                className="cursor"
                onClick={handleSearchIconClick}
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
              </motion.svg>
            )}
          </span>
          <span
            className="tooltip-text"
            style={{ display: isClickedOn ? "none" : "" }}
          >
            Search
          </span>
          <span
            className="triangle"
            style={{ display: isClickedOn ? "none" : "" }}
          ></span>
        </div>

        <div className="tooltip">
          <span className="product-info-icon">
            <Link to="/wishlist">
              <motion.svg
                whileHover={{ scale: 1.3 }}
                transition={{ type: "tween" }}
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Zm0-2.7q2.4-2.15 3.95-3.688 1.55-1.537 2.45-2.674.9-1.138 1.25-2.026.35-.887.35-1.762 0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662-1 .663-1.375 1.688h-1.9q-.375-1.025-1.375-1.688-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.762.35.888 1.25 2.026.9 1.137 2.45 2.674Q9.6 16.15 12 18.3Zm0-6.825Z" />
              </motion.svg>
            </Link>
          </span>
          <span className="tooltip-text">Wishlist</span>
          <span className="triangle"></span>
        </div>

        <div className="tooltip">
          <span className="product-info-icon ">
            {/* //SVG ICON */}
            <motion.svg
              whileHover={{ scale: 1.3 }}
              transition={{ type: "tween" }}
              className="basket-icon cursor"
              onClick={handleModalOpen}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z" />
            </motion.svg>
            {isOpen &&
              ReactDOM.createPortal(
                <BasketModal setIsOpen={setIsOpen} />,
                document.getElementById("modal-root")
              )}
          </span>
          <div className="basket-length">
            <span>0</span>
          </div>
          <span className="tooltip-text">Basket</span>
          <span className="triangle"></span>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
