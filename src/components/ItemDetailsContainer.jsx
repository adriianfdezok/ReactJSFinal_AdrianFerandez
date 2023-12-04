// ItemDetailContainer.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { categoria } = useParams(); 
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, 'productoId');
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
  }, [categoria]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p>Detalle del Producto</p>
      <ItemDetail product={item} categoria={categoria} key={item.id} />
    </div>
  );
};

export default ItemDetailContainer;
