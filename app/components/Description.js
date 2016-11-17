import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className="item__description">
       <h2>{title}</h2>
       <p>{description}</p>
      </div>
    );
  }
}
