import React, { Component } from 'react';

export default class Thumbnail extends Component {
  render() {
    const { url } = this.props;

    return <span className="item__image"><img src={url} alt="" /></span>
  }
}
