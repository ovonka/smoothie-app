import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalProductDetails from "../Products/ModalProductDetails";
import "./Home.css";

const Home = () => {
  const [isBtnHover, setIsBtnHover] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const handleMouseOverImg = () => {
    setIsBtnHover(true);
  };

  const handleMouseOutImg = () => {
    setIsBtnHover(false);
  };
  const handleProductDetailClick = () => {
    setIsProductOpen(true);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>Welcome</h1>
          <h3>Nkanyiso Ntshangase</h3>
          <p>
            You're only one <span> SMOOTHIE</span> and workout <br /> away from
            a good mood{" "}
          </p>
        </div>
      </div>
      <div className="product-wrapper">
        <div className="header-title">
          <span className="best-seller">
            Our best Sellers, That You must Experience
          </span>
          <span className="add-title">
            Go on, add them to your basket, what you see is what you'll get.
          </span>
        </div>
        <div className="wrapper">
          <div className="item-slide-info">
            <div
              className="btn-img"
              onMouseOver={handleMouseOverImg}
              onMouseOut={handleMouseOutImg}
            >
              <button
                onClick={handleProductDetailClick}
                className="quick-view-btn"
                style={{
                  visibility: isBtnHover ? "visible" : "hidden",
                  cursor: isBtnHover && "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>{" "}
                Quick View
              </button>
              <img
                className="item-image-display"
                src="https://assets.woolworthsstatic.co.za/Ayrshire-Berry-Boost-Smoothie-300-ml-6009217821143.jpg?V=gmBz&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIwLTEyLTMwLzYwMDkyMTc4MjExNDNfaGVyby5qcGcifQ&w=800&q=85"
                alt=""
              />
              {isProductOpen &&
                ReactDOM.createPortal(
                  <ModalProductDetails />,
                  document.getElementById("modal-root")
                )}
            </div>
            <span className="smoothie-title">
              {" "}
              <strong>Orange Cinamon Decker</strong>
            </span>
            <span className="the-price">R149.99</span>
            <span className="home-add-btn">
              <button>Add to cart</button>
            </span>
          </div>
          <div className="item-slide-info">
            <div
              className="btn-img"
              onMouseOver={handleMouseOverImg}
              onMouseOut={handleMouseOutImg}
            >
              <button
                onClick={handleProductDetailClick}
                className="quick-view-btn"
                style={{
                  visibility: isBtnHover ? "visible" : "hidden",
                  cursor: isBtnHover && "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>{" "}
                Quick View
              </button>
              <img
                className="item-image-display"
                src="https://assets.woolworthsstatic.co.za/Ayrshire-Berry-Boost-Smoothie-300-ml-6009217821143.jpg?V=gmBz&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIwLTEyLTMwLzYwMDkyMTc4MjExNDNfaGVyby5qcGcifQ&w=800&q=85"
                alt=""
              />
              {isProductOpen &&
                ReactDOM.createPortal(
                  <ModalProductDetails />,
                  document.getElementById("modal-root")
                )}
            </div>
            <span className="smoothie-title">
              {" "}
              <strong>Orange Cinamon Decker</strong>
            </span>
            <span className="the-price">R149.99</span>
            <span className="home-add-btn">
              <button>Add to cart</button>
            </span>
          </div>
          <div className="item-slide-info">
            <div
              className="btn-img"
              onMouseOver={handleMouseOverImg}
              onMouseOut={handleMouseOutImg}
            >
              <button
                onClick={handleProductDetailClick}
                className="quick-view-btn"
                style={{
                  visibility: isBtnHover ? "visible" : "hidden",
                  cursor: isBtnHover && "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>{" "}
                Quick View
              </button>
              <img
                className="item-image-display"
                src="https://assets.woolworthsstatic.co.za/Ayrshire-Berry-Boost-Smoothie-300-ml-6009217821143.jpg?V=gmBz&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIwLTEyLTMwLzYwMDkyMTc4MjExNDNfaGVyby5qcGcifQ&w=800&q=85"
                alt=""
              />
              {isProductOpen &&
                ReactDOM.createPortal(
                  <ModalProductDetails />,
                  document.getElementById("modal-root")
                )}
            </div>
            <span className="smoothie-title">
              {" "}
              <strong>Orange Cinamon Decker</strong>
            </span>
            <span className="the-price">R149.99</span>
            <span className="home-add-btn">
              <button>Add to cart</button>
            </span>
          </div>
          <div className="item-slide-info">
            <div
              className="btn-img"
              onMouseOver={handleMouseOverImg}
              onMouseOut={handleMouseOutImg}
            >
              <button
                onClick={handleProductDetailClick}
                className="quick-view-btn"
                style={{
                  visibility: isBtnHover ? "visible" : "hidden",
                  cursor: isBtnHover && "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>{" "}
                Quick View
              </button>
              <img
                className="item-image-display"
                src="https://assets.woolworthsstatic.co.za/Ayrshire-Berry-Boost-Smoothie-300-ml-6009217821143.jpg?V=gmBz&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIwLTEyLTMwLzYwMDkyMTc4MjExNDNfaGVyby5qcGcifQ&w=800&q=85"
                alt=""
              />
              {isProductOpen &&
                ReactDOM.createPortal(
                  <ModalProductDetails />,
                  document.getElementById("modal-root")
                )}
            </div>
            <span className="smoothie-title">
              {" "}
              <strong>Orange Cinamon Decker</strong>
            </span>
            <span className="the-price">R149.99</span>
            <span className="home-add-btn">
              <button>Add to cart</button>
            </span>
          </div>
          <div className="item-slide-info">
            <div
              className="btn-img"
              onMouseOver={handleMouseOverImg}
              onMouseOut={handleMouseOutImg}
            >
              <button
                onClick={handleProductDetailClick}
                className="quick-view-btn"
                style={{
                  visibility: isBtnHover ? "visible" : "hidden",
                  cursor: isBtnHover && "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>{" "}
                Quick View
              </button>
              <img
                className="item-image-display"
                src="https://assets.woolworthsstatic.co.za/Ayrshire-Berry-Boost-Smoothie-300-ml-6009217821143.jpg?V=gmBz&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIwLTEyLTMwLzYwMDkyMTc4MjExNDNfaGVyby5qcGcifQ&w=800&q=85"
                alt=""
              />
              {isProductOpen &&
                ReactDOM.createPortal(
                  <ModalProductDetails />,
                  document.getElementById("modal-root")
                )}
            </div>
            <span className="smoothie-title">
              {" "}
              <strong>Orange Cinamon Decker</strong>
            </span>
            <span className="the-price">R149.99</span>
            <span className="home-add-btn">
              <button>Add to cart</button>
            </span>
          </div>
        </div>
        <span className="nex-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="78px"
            viewBox="0 0 20 20"
            width="78px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="20" width="20" x="0" />
            </g>
            <g>
              <path d="M10,13l-3-3l3-3l1.06,1.06L9.87,9.25H13v1.5H9.87l1.19,1.19L10,13z M2,10c0,4.42,3.58,8,8,8s8-3.58,8-8s-3.58-8-8-8 S2,5.58,2,10z M16.5,10c0,3.58-2.92,6.5-6.5,6.5S3.5,13.58,3.5,10S6.42,3.5,10,3.5S16.5,6.42,16.5,10z" />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="78px"
            viewBox="0 0 20 20"
            width="78px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="20" width="20" x="0" />
            </g>
            <g>
              <path d="M10,7l3,3l-3,3l-1.06-1.06l1.19-1.19H7v-1.5h3.13L8.94,8.06L10,7z M18,10c0-4.42-3.58-8-8-8s-8,3.58-8,8s3.58,8,8,8 S18,14.42,18,10z M3.5,10c0-3.58,2.92-6.5,6.5-6.5s6.5,2.92,6.5,6.5s-2.92,6.5-6.5,6.5S3.5,13.58,3.5,10z" />
            </g>
          </svg>
        </span>
      </div>
      <div className="info-header">
        <div className="header-info-text">
          <h2>
            Healthy and tasty smoothies with <br />{" "}
            <span>natural ingredients</span>
          </h2>
          <p>
            <strong>SMOOTHIE</strong>® aims to make our client’s lives easier,
            making everyday living healthier and more efficient by delivering
            packaged ready to eat meals to your doorstep. Our team has developed
            a healthy yet delicious way of cooking using natural herbs and
            spices making every dish unique. Prepared with the mind of a healthy
            eater. We offer many different packages to suit you and your
            lifestyle! All our products are healthy, well portioned then frozen
            and delivered to you in a <strong> once off </strong>delivery for
            your <strong>convenience</strong>!
          </p>
        </div>
        <div className="header-img">
          <img
            src="https://photosfine.files.wordpress.com/2012/04/white-background-fruit-and-vegetables-18.jpg"
            alt=""
          />
        </div>
        <div className="list-text">
          <ul>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z" />
              </svg>
              Reduces weight
            </li>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z" />
              </svg>
              Control calories
            </li>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z" />
              </svg>
              Improve health
            </li>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z" />
              </svg>
              Reduces inflamation
            </li>
            <li>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z" />
              </svg>
              Adds strength and energy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
