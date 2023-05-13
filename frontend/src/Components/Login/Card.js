import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className="card-outer">
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    </div>
  );
};

export default Card;