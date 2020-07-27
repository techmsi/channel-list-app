import React from 'react';
import { getFormattedTime } from 'utils/helpers';

export const DateTime = ({ dateTime, formatString }) => {
  console.log('dateTime', dateTime);
  return <time>{getFormattedTime(dateTime, formatString)}</time>;
};
