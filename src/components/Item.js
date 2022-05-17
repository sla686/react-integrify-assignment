import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, onClick }) => {
  return (
    <div
      className={`
      item ${item.status} === 'green' 
      ? 'green' 
      : ${item.status} === 'yellow' 
      ? 'yellow 
      : 'red' `}
      onClick={() => onClick(item.id)}
    >
      <h3>{item.text}</h3>
      <p>Deadline: {item.date}</p>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
};

export default Item;
