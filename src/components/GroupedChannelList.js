import React from 'react';

import { ChannelItem } from '/components/ChannelItem';
import { ProgramHeader } from '/components/ProgramHeader';

export const GroupedChannelList = ({ list }) => {
  const programListings = Object.entries(list);

  return programListings.map(([channelDate, listings]) => (
    <ul className="channel-program" key={`channel-list-${channelDate}`}>
      <ProgramHeader title={channelDate} total={listings.length} />
      {listings.map(ChannelItem)}
    </ul>
  ));
};
