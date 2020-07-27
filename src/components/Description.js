import React from 'react';

export const Description = ({ title, description }) => (
  <div className="item__description">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
