import React from 'react';

import { Description } from 'components/Description';
import { Thumbnail } from 'components/Thumbnail';
import { DateTime } from 'components/DateTime';
import { Author } from 'components/Author';

export const ChannelItem = ({
  startTime,
  endTime,
  duration,
  subjectPhotoUrl,
  title,
  description,
  instructorName,
  instructorPhotoUrl,
}) => {
  return (
    <li className="item">
      <Thumbnail url={subjectPhotoUrl} />
      <Description title={title} description={description} />
      <div className="item__details">
        <Author name={instructorName} avatar={instructorPhotoUrl} />
        <span className="item__time">
          <DateTime dateTime={startTime} formatString="h:mm A" />
          <DateTime dateTime={endTime} />
        </span>
      </div>
    </li>
  );
};
