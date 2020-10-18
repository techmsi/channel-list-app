import React from 'react';

export const Thumbnail = ({ url, className = '' }) => (
  <img className={`item__image ${className}`} src={url} alt="" />
);
