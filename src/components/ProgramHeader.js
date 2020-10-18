import React from 'react';

export const ProgramHeader = ({ title, total }) => (
  <li className="item__header">
    <h2>{title}</h2>
    <span>
      ({total}) Program{total > 1 ? 's' : ''}
    </span>
  </li>
);
