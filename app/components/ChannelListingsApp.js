import React, { Component } from 'react';

// Utility for fetch
import Api from '../utils/Api';
import { sortedByTime, groupBy, createDateHeaders } from '../utils/helpers';

// Component
import ChannelItem from './ChannelItem';
import DateHeader from './DateHeader';

export default class ChannelListingsApp extends Component {
  constructor(props) {
    super(props);

    this.api = new Api('http://localhost:3004');

    this.state = {
      dataSorted: [],
      dataGroupedByDate: {}
    }
  }

  componentWillMount() {
    this._loadData();
  }

  _loadData() {
    // get from server
    this.api.get('/channel')
    .then(channelJson => {
      const headers = createDateHeaders(channelJson);
      const groupedChannelJson = groupBy(headers, 'fullDate');

      this.setState({
        dataGroupedByDate: groupedChannelJson
      });
    }).catch(e => { console.log('Error', e) })
  }

  // Render array for inputed `fullDate` key
  _renderList(fullDate) {
    const { dataGroupedByDate } = this.state;

    return dataGroupedByDate[fullDate]
          .map((value, i) => <ChannelItem key={`channel-item-${i}`} item={value} />);
  }

  render() {

    const { dataGroupedByDate } = this.state;

    const ChannelList = Object.keys(dataGroupedByDate).map((channel, i) => {
      return <ul key={`channel-list-${i}`}>
        <DateHeader title={channel} />
        {this._renderList(channel)}
       </ul>
    });

    return <section>{ChannelList}</section>
  }
}
