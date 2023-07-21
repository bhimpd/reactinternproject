import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  console.log(products);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div className="container-fluid cartbackground">
        <div className="container py-5">
          <div className="container text-center my-2">
            <h1> Our Product Lists</h1>
          </div>
          <div className="cartwraper ">
            {products.map((product) => (
              <div className="cartCard" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: "50px", width: "40px" }}
                />
                <div className="titlenprice mx-auto">
                  <h5>{product.title}</h5>
                  <h5> Price :${product.price}</h5>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
