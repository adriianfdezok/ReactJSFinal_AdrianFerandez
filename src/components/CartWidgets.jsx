import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from './ShopContext';
import "./styles/cartCircle.css";

const CartWidgets = () => {
  const { bgCounts } = useContext(CartContext);

  return (
    <Link to="/mycarts" className="text-decoration-none">
      <Button className="bg-dark text-white fs-4">
        <FaShoppingCart />

        <span className="position-absolute mt-3 fs-5 bgCircleShop border rounded-circle circleShop">
          {bgCounts()}
        </span>
      </Button>
    </Link>
  );
}

export default CartWidgets;
