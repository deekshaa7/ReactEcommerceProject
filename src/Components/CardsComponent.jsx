import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoCart } from "../CartSlice"; 

const CardsComponent = () => {
  const [myData, setMyData] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    const url = "http://localhost:3000/product";
    axios.get(url).then((response) => {
      setMyData(response.data);
      console.log("Data loaded:", response.data);
    }).catch((error) => {
      console.error("Error loading data:", error);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const addDataToCart = (id, brand, description, price, image) => {
    console.log("Dispatching addtoCart with:", { id, brand, description, price, image });
    dispatch(addtoCart({
      id,
      brand,
      price,
      description,
      image
    }));
  };

  const ans = myData.map((item) => (
    <Card key={item.id} style={{ width: "18rem", height: "415px" }} className="mb-4">
      <img src={`./src/images/${item.image}`} style={{ width: "300px", height: "200px" }} alt={item.brand} />
      <Card.Body>
        <Card.Title>{item.brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.model}</Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>
          <strong>Price: </strong>{item.price}
        </Card.Text>
        <Button variant="dark" onClick={() => {
          console.log("Adding to cart:", item);
          addDataToCart(
            item.id,
            item.brand,
            item.description,
            item.price,
            item.image
          );
        }}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <h1 align="center">Our Trending Products</h1>
      <div id='cartproduct' style={{ display: "flex", justifyContent: "space-between" }}>
        {ans}
      </div>
    </>
  );
};

export default CardsComponent;
