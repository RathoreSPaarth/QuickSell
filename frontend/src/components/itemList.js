import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        items.map(item => <Item key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ItemList;
