import React from 'react';

import paragraph from '../../assets/paragraph.png';
import './Placeholder.css';

const style = {
  color: '#999',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  fontSize: '13px'
};

const Placeholder = () => (
  <div style={ style }>
    <p>Loading...</p>
    <img className="cdp-event-single-img" src={ paragraph } alt="" />
    <p />
    <img className="cdp-event-single-img" src={ paragraph } alt="" />
  </div>
);

export default Placeholder;
