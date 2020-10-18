import React from 'react';

import { Thumbnail } from '/components/Thumbnail';

export const Author = ({ name, avatar }) => (
  <>
    <Thumbnail className="item__author-avatar" url={avatar} />
    <h4 className="item__author-name">{name}</h4>
  </>
);
