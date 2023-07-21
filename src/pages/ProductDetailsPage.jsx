import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; 
import "./home.css";
import { add } from "../store/cartSlice";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const { id } = useParams(); 

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details based on the ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  const selectedProduct = product;

  if (!selectedProduct) {
    return <div className="notfound">Product not found!!!</div>; // Handle case when product is not found
  }

  const { rating, title, price, category, description, image } = selectedProduct;

  const AddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className="container-fluid productdetails">
        <div className="container text-center mt-2 pt-5">
          <h1>Product Details</h1>
        </div>
        <div className="container my-5 productdetails">
          <div className="row">
            <div className="col-md-6 py-4 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={image} alt={title} style={{ height: "25rem" }} />
            </div>
            <div className="col-md-6">
              <h2>{title}</h2>
              <hr />
              <p>
                Rating: {rating.rate} (out of {rating.count})
              </p>
              <p>ID: {id}</p>
              <p>Title: {title}</p>
              <p>Price: {price}</p>
              <p>Category: {category}</p>
              <p>Description: {description}</p>
              <button className="btn btn-success" onClick={() => AddToCart(selectedProduct)}>
                Add to Cart
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
