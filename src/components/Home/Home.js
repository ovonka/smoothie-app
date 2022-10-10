import React from "react";
import "./Home.css";

const Home = () => {
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
          <span>Wrapper</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
