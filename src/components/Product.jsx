import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";


const Product = () => {
  // const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // console.log(data);

      setProducts(data);
    };
    fetchProducts();
  }, []);

  // const handleAdd = (product) => {
  //   dispatch(add(product));
  // };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center mx-auto">
        <div className="col-md-3 my-3 ">
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products..."
            />
          </div>
        </div>
     
        <div className="row d-flex justify-content-center align-items-center text-center">
          
          {filteredProducts.map((product, index) => {
            const { id, image, title, price } = product;

            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12  my-3 d-flex justify-content-center align-items-center"
                key={index}
              >
                <Link className="link" to={`/product/${id}`}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "30rem",
                      padding: "8px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    }}
                    // onClick={() => handleAdd(product)}
                  >
                    <Card.Img
                      variant="top"
                      src={image}
                      style={{ height: "20rem" }}
                    />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>Price: ${price}</Card.Text>
                     

                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
