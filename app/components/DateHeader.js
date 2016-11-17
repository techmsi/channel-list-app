import React, { Component } from 'react';

import DateTime from './DateTime';

export default class DateHeader extends Component {
  render() {
    const { title } = this.props;

    return (
      <li className="item__header">
        <DateTime dateTime={title} formatString='ddd, MMMM D, YYYY' />
      </li>
    );
  }
}
