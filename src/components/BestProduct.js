import React from 'react';
import './BestProduct.css';

const bestProducts = [
  { id: 1, name: 'Face Oil 30ml', image: '/images/P1.jpg', price: '£53.00', rating: 5, reviews: 22 },
  { id: 2, name: 'Serum 50ml', image: '/images/serum.png', price: '£45.00', rating: 4.8, reviews: 18 },
  { id: 3, name: 'Moisturizer 100ml', image: '/images/moisturizer.png', price: '£60.00', rating: 4.9, reviews: 30 },
  { id: 4, name: 'Night Cream 75ml', image: '/images/night-cream.png', price: '£70.00', rating: 4.7, reviews: 25 },
  { id: 5, name: 'Toner 200ml', image: '/images/toner.png', price: '£35.00', rating: 4.6, reviews: 15 },
];

export default function BestProduct() {
  return (
    <div className="best-product-section">
      <div className="best-product-header">
        <h2>Shop by type</h2>
        <a href="/best-products">See all</a>
      </div>
      <div className="best-product-container">
        <div className="best-product-slider">
          {bestProducts.map((product) => (
            <div key={product.id} className="best-product-card">
              <div className="best-product-content">
                <img src={product.image} alt={product.name} className="best-product-image" />
                <div className="best-product-info">
                  <h3>{product.name}</h3>
                  <p>★★★★★ {product.reviews}</p>
                  <p>Formulated to stimulate skin cell renewal in the most natural way.</p>
                  <div className="best-product-actions">
                    <button className="add-to-bag">Add to bag</button>
                    <span className="product-price">{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
