import React, { useState, useEffect } from 'react';

import Api from '/utils/Api';
import { GroupedChannelList } from '/components/GroupedChannelList';

const api = new Api('http://localhost:3004');

export const ChannelListings = () => {
  const [sortedList, setSortedList] = useState(null);

  useEffect(() => {
    api.getChannels('channel').then((channels) => {
      setSortedList(channels);
    });
  }, []);

  return sortedList && <GroupedChannelList list={sortedList} />;
};
