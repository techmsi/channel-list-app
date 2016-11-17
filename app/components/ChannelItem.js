import React, { Component } from 'react';

import Description from './Description';
import Thumbnail from './Thumbnail';
import DateTime from './DateTime';
import Author from './Author';

export default class ChannelItem extends Component {

  render(){
    const { startTime, endTime, duration, subjectPhotoUrl, title, description, instructorName, instructorPhotoUrl } = this.props.item;

    return (
    <li className="item">
      <Thumbnail url={subjectPhotoUrl} />
      <Description title={title} description={description} />
      <div className="item__details">
        <Author name={instructorName} avatar={instructorPhotoUrl}/>
        <span className="item__time">
          <DateTime dateTime={startTime} formatString='h:mm A' />
          <DateTime dateTime={endTime} />
        </span>
      </div>
    </li>
    )
  }
}
