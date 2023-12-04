import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ItemCount from './ItemCount';
import { useCartContext } from './ShopContext';
import 'react-toastify/dist/ReactToastify.css';
import './styles/ItemDetailsCustom.css';

const ItemDetails = () => {
    const { addCarrito } = useCartContext();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { productoId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const docRef = doc(db, 'productoId', productoId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = {
                        id: docSnap.id,
                        ...docSnap.data(),
                    };
                    console.log('Datos del producto:', data);
                    setItem(data);
                } else {
                    setError('Producto no encontrado');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error al cargar el producto');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productoId]);

    const handleAddToCart = async (quantity) => {
        if (item.stock >= quantity) {
            const updatedStock = item.stock - quantity;

            const db = getFirestore();
            const docRef = doc(db, 'productoId', item.id);
            await updateDoc(docRef, { stock: updatedStock });

            toast.success(`Has agregado ${quantity} al carrito`, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });

            setItem({ ...item, stock: updatedStock });

            addCarrito({
                id: item.id,
                title: item.titulo,
                costo: item.precio,
                quantity: quantity,
            });
        } else {
            toast.error('No hay suficiente stock disponible', {
                position: 'top-right',
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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container fluid="lg" className="my-5">
            <Row>
                <Col md={8} className="d-flex shadow-lg align-items-center justify-content-center backgroundDetails box-shadow-5 rounded-pill-3">
                    <Image src={item.imagen} className="img-fluid w-50" alt={item.title} />
                </Col>
                <Col md={4} className="d-flex flex-column justify-content-center backgroundDetails">
                    <div className="DetailsText">
                        <h2>{item.titulo}</h2>
                        <div>
                            <Badge bg="primary">{item.bgbadge}</Badge>
                        </div>
                        <hr></hr>
                        <p className="muted">{item.descripcion}</p>
                        <hr></hr>
                        <h2 className="font-weight-bold">Total: ${item.precio}</h2>
                        {item.stock > 0 ? (
                            <div>
                                <p className="text-success">En stock: {item.stock} unidades</p>
                                <ItemCount handleAddToCart={handleAddToCart} />
                            </div>
                        ) : (
                            <div>
                                <p className="text-danger">Sin stock </p>
                                <p>Producto agotado</p>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetails;
