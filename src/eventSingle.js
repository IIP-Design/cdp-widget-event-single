import React from 'react';

import EventContainer from './containers/EventContainer';

import './eventSingle.css';

const EventSingle = props => (
  <div className="cdp-single">
    <EventContainer config={ props } />
  </div>
);

export default EventSingle;
