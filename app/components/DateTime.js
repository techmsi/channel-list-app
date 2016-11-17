import React, { Component } from 'react';
import { getFormattedTime } from '../utils/helpers';

export default class DateTime extends Component {
  render() {
    const { dateTime, formatString } = this.props;

    return <time>{getFormattedTime(dateTime, formatString)}</time>;
  }
}
