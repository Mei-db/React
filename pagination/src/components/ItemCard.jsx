import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>ID: {item.id}</p>
      <p>Role: {item.role}</p>
    </div>
  );
};

export default ItemCard;
