import React from 'react';
import { render } from 'react-dom';

import { ChannelListings } from '/components/ChannelListings';

// Stylesheets
import '/scss/app.scss';

const appContainer = document.getElementById('react-container');

render(<ChannelListings />, appContainer);
