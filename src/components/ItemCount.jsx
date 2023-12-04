import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ItemCount = ({ handleAddToCart }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const DecrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addCart = () => {
    if (count > 0) {
       handleAddToCart(count);
    } else {
      toast.error('No has seleccionado ningún producto', {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center ">
        <Button variant="dark" onClick={DecrementCount} disabled={count === 0}>
          -
        </Button>
        <div className="fs-5 p-5">{count}</div>
        <Button variant="dark" onClick={incrementCount} disabled={count === 10}>
          +
        </Button>
      </div>
      <br />
      <Button variant="dark" onClick={addCart} disabled={count === 0}>
        Agregar al carrito
      </Button>
      <ToastContainer />
    </div>
  );
};

export default ItemCount;
