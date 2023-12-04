import React, { useState } from 'react';
import ItemList from './ItemList';

const ParentComponent = () => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div>
      <ItemList products={products} setProducts={setProducts} />
    </div>
  );
};

export default ParentComponent;
