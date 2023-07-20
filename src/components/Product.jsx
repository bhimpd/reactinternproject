import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-center">
          {products.map((info, index) => {
            const { image, title, price } = info;

            return (

              <div className="col-md-4 my-3 d-flex justify-content-center align-items-center" key={index}>
                <Card style={{ width: "20rem", height: "30rem",padding :"8px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
                  <Card.Img
                    variant="top"
                    src={image}
                    style={{height: "18rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Price : ${price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
            
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
