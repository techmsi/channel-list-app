import React from 'react';

export const Description = ({ title, description }) => (
  <div className="item__description">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
