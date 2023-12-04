import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Item from './Item';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const [ProductoId, setProductoId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'productoId')); 
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductoId(data);
      setLoading(false);
    };

    fetchData().catch((error) => {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setLoading(false);
    });
  }, []);

  const filteredProducts = categoria
    ? ProductoId.filter((productoId) => productoId.categoria === categoria)
    : ProductoId;

  return (
    <div className="container my-1 p-5 pt-3">
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredProducts.length === 0 ? (
        <p>No hay productos disponibles en esta categoría.</p>
      ) : (
        <Row>
          {filteredProducts.map((producto) => (
            <Item key={producto.id} product={producto} setProducts={setProductoId} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default ItemListContainer;
