import React from 'react';
import '../../App.css';
import './Products.css';

const productData = [
  { id: 1, name: 'Serum', image: '', price: '$25' },
  { id: 2, name: 'Moisturizer', image: '', price: '$30' },
  { id: 3, name: 'Toner', image: '', price: '$20' },
  { id: 4, name: 'Cleanser', image: '', price: '$18' },
  { id: 5, name: 'Sunscreen', image: '', price: '$22' },
  { id: 6, name: 'Face Oil', image: '', price: '$28' },
  { id: 7, name: 'Eye Cream', image: '', price: '$35' },
  { id: 8, name: 'Exfoliator', image: '', price: '$27' },
  { id: 9, name: 'Sheet Mask', image: '', price: '$15' },
  { id: 10, name: 'Night Cream', image: '', price: '$40' }
];

export default function Products() {
  return (
    <div className="product-container">
      {productData.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image"></div>
          <p className="product-name">{product.name}</p>
          <button className="product-button">+</button>
        </div>
      ))}
    </div>
  );
}
