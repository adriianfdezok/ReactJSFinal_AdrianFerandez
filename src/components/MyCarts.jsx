import React from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { Button, Table } from 'react-bootstrap';
import { useCartContext } from './ShopContext';
import { Link } from 'react-router-dom';

export default function MyCarts() {
    const { cart, PriceFinal, deleteCart,addProduct } = useCartContext();

    const handleIncrement = (product) => {
        const newQuantity = product.quantity + 1;
        addProduct(product, newQuantity);
    };

    const isCartEmpty = cart.length === 0;

    return (
        <div className="container mt-5 bg-table">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.quantity}</td>
                            <td>${product.costo }</td>
                            <td>${product.TotalsProducts}</td>
                            <td></td>
                         </tr>
                    ))}
                    <tr>
                        <td colSpan="3"></td>
                        <td className="font-weight-bold">Total: ${PriceFinal()}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

            <div className="text-center mt-3">
                <Link to="/Checkout">
                    <Button variant="dark" className="mr-2">
                        Finalizar Compra
                    </Button>
                </Link>

                <Button variant="warning" onClick={deleteCart} disabled={isCartEmpty}>
                    <AiOutlineClear /> Vaciar Carrito
                </Button>
            </div>
        </div>
    );
}
