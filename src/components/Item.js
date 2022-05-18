import React from 'react';
import PropTypes from 'prop-types';
import { FaTimesCircle } from 'react-icons/fa';

const Item = ({ item, onClick, onDelete }) => {
  return (
    <>
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
      <FaTimesCircle className="circle" onClick={() => onDelete(item.id)} />
    </>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Item;
