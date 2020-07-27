import React, { useState, useEffect } from 'react';

// Utility for fetch
import Api from 'utils/Api';

// Component
import { ChannelItem } from 'components/ChannelItem';
import { DateHeader } from 'components/DateHeader';

const renderList = (fullDate) => {
  const { dataGroupedByDate } = this.state;

  return dataGroupedByDate[fullDate].map((value, i) => (
    <ChannelItem key={`channel-item-${i}`} item={value} />
  ));
};
export const ChannelList = ({ list }) =>
  list.length
    ? list.map((channel, i) => (
        <ul key={`channel-list-${i}`}>
          <DateHeader title={channel} />
          <ChannelItem key={`channel-item-${i}`} {...channel} />
        </ul>
      ))
    : null;

const api = new Api('http://localhost:3004');
export const ChannelListings = () => {
  const [sortedList, setSortedList] = useState([]);
  const [listGroupedByDate, setListGroupedByDate] = useState({});

  useEffect(() => {
    api.getChannels('channel').then((channels) => {
      console.log('Channels', channels.length);
      setSortedList(channels);
    });
  }, []);

  return sortedList && <ChannelList list={sortedList} />;
};
