import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <button>Place Bid</button>
    </div>
  );
};

export default Item;
