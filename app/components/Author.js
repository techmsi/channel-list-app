import React, { Component } from 'react';

import Thumbnail from './Thumbnail';

export default class Author extends Component {
  render(){
    const { name, avatar } = this.props;

    return (
      <span className="item__author">
        <Thumbnail url={avatar} />
        <h3 rel="author">{name}</h3>
      </span>
    );

  }
}
