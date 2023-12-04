import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import "./styles/misCards.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ product, setProducts }) => {
 
 

  return (
    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
      <Card
        className={`mb-4 shadow-sm customCard ${
          product.isHovered ? "hovered-card" : ""
        }`}
  
      >
        <Link
          to={`/product/${product.id}`}
          className="text-decoration-none text-dark"
        >
          <Card.Img
            variant="top"
            src={product.imagen}
            alt={product.name}
            className="customImage"
          />
          <Card.Body>
            <Card.Title className="text-center">
              <strong>{product.titulo}</strong>
            </Card.Title>
            <Card.Text className="text-center text-muted fs-5">
              ${product.precio}
            </Card.Text>
            {product.stock > 0 ? (
              <h3 className="stock_true text-success">Con stock</h3>
            ) : (
              <h3 className="fs-5 text-danger">Sin Stock</h3>
            )}
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default Item;
