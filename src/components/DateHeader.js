import React from 'react';

import { DateTime } from 'components/DateTime';

export const DateHeader = ({ title }) => (
  <li className="item__header">
    <DateTime dateTime={title} formatString="ddd, MMMM D, YYYY" />
  </li>
);
