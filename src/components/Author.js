import React from 'react';

import { Thumbnail } from 'components/Thumbnail';

export const Author = ({ name, avatar }) => (
  <span className="item__author">
    <Thumbnail url={avatar} />
    <h3 rel="author">{name}</h3>
  </span>
);
