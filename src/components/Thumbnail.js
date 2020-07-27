import React from 'react';

export const Thumbnail = ({ url }) => (
  <span className="item__image">
    <img src={url} alt="" />
  </span>
);
