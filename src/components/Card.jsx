import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-price">${props.price}</p>
      </div>
    </div>
  );
};

export default Card;
