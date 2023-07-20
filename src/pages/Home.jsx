import React from "react";
import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <div className="container text-center my-5 py-5">
        <h1> Our Products</h1>
      </div>
      <div className="container my-3">
        <div className="row">
<Product />
        </div>
      </div>
    </>
  );
};

export default Home;
