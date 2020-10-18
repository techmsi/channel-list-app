import React from 'react';

import { Description } from '/components/Description';
import { Thumbnail } from '/components/Thumbnail';
import { Author } from '/components/Author';
import { ProgramTime } from '/components/ProgramTime';

export const ChannelItem = ({
  startTime,
  endTime,
  subjectPhotoUrl,
  title,
  description,
  instructorName,
  instructorPhotoUrl,
}) => {
  return (
    <li className="item" key={`channel-item-${title}`}>
      <Thumbnail className="channel-image" url={subjectPhotoUrl} />
      <Description title={title} description={description} />
      <Author name={instructorName} avatar={instructorPhotoUrl} />
      <ProgramTime startTime={startTime} endTime={endTime} />
    </li>
  );
};
