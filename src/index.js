import React from 'react';
import ReactDOM from 'react-dom';

import EventSingle from './eventSingle';

import './eventSingle.css';

export const widgets = {
  Event: {
    new: function ( config ) {// eslint-disable-line
      return {
        render: () => {// eslint-disable-line
          if ( !config || !config.selector ) {
            console.log( 'Please add a valid DOM node to add component to' );
            return;
          }

          ReactDOM.render( <EventSingle
            selector={ config.selector }
            query={ config.query }
            sites={ config.sites }
            ids="1008"
          />, document.querySelector( config.selector ) );
        }
      };
    }
  }
};
