import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const Items = ({ items, editItem, onDelete }) => {
  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onClick={() => editItem(item.id)}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

Items.propTypes = {
  items: PropTypes.array,
  editItem: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Items;
