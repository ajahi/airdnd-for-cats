import React from 'react';

const Card = ({ imageUrl, name, price }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card;
