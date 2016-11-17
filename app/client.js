import React, { Component } from 'react';
import { render } from 'react-dom';

import ChannelListingsApp from './components/ChannelListingsApp';

// Stylesheets
require('./scss/app.scss');

const appContainer = document.getElementById('react-container');

render(<ChannelListingsApp /> , appContainer);

if (module.hot) {
  module.hot.accept();
}
