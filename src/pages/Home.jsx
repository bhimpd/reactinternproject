import React from "react";
import Product from "../components/Product";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid homepage">
        <div className="container text-center mt-2 pt-5">
          <h1> Welcome to Our Product Store</h1>
        </div>
        <div className="container my-3">
          <div className="row">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
