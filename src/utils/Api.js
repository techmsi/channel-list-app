import { groupBy } from '/utils/groupBy';
import { createDateHeaders } from '/utils/createDateHeaders';

export default class Api {
  constructor(host) {
    this.host = host;
  }
  getChannels = async (url) => {
    const endpoint = `${this.host}/${url}`;
    let groupedChannels = [];

    try {
      const response = await fetch(endpoint);
      const channels = await response.json();

      if (channels.length) {
        const dateHeaders = createDateHeaders(channels);
        const groupedByDate = groupBy(dateHeaders, 'fullDate');

        groupedChannels = groupedByDate;
      }

      return groupedChannels;
    } catch (error) {
      console.log('Fetch Channels API Error', error);
    }
  };
}
