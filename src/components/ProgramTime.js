import React from 'react';
import { DateTime } from '/components/DateTime';

export const ProgramTime = ({ startTime, endTime }) => (
  <span className="item__time">
    <DateTime dateTime={startTime} formatString="h:mm A" />
    <DateTime dateTime={endTime} formatString="h:mm A" />
  </span>
);
