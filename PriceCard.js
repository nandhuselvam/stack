import React from 'react'

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2>{title}</h2>
      <p className="price">${price}</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default PriceCard;