import { groupBy, createDateHeaders } from 'utils/helpers';
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
        // const headers = createDateHeaders(channels);
        // groupedChannels = groupBy(headers, 'fullDate');
        groupedChannels = channels;
      }

      return groupedChannels;
    } catch (error) {
      console.log('Fetch API Error', error);
    }
  };
}
