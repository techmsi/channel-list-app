import React from 'react';
import { getFormattedTime } from '/utils/getFormattedTime';

export const DateTime = ({ dateTime, formatString }) => {
  return <time>{getFormattedTime(dateTime, formatString)}</time>;
};
