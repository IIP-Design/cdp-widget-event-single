import React, { Fragment } from 'react';
import Parser from 'html-react-parser';
import { object } from 'prop-types';

import './EventItem.css';

const EventItem = ( { data } ) => (
  <article className="cdp-event-single">
    <h2 className="cdp-event-single-title">{ data.title }</h2>
    { data.thumbnail && (
      <div className="cdp-event-single-media">
        <figure className="aligncenter">
          <img className="cdp-event-single-feat-img" src={ data.thumbnail } alt="" />
        </figure>
      </div>
    ) }
    <div className="cdp-event-single-content">
      <div className="cdp-event-single-meta">
        <p><strong>When:</strong>{ data.dateStart }</p>
        <p><strong>Language:</strong></p>
        <p><strong>Event Page:</strong></p>
        <p><strong>Organizer:</strong></p>
      </div>
      { data.description && (
        <Fragment>
          <h3 className="cdp-event-single-title">Description</h3>
          <p className="cdp-event-single-description">{ data.description }</p>
        </Fragment>
      ) }
      { data.speakers && (
        <Fragment>
          <h3 className="cdp-event-single-title">Speakers</h3>
          <div className="cdp-event-single-speakers"> { data.speakers } </div>
        </Fragment>
      ) }
    </div>
  </article>
);

EventItem.propTypes = {
  data: object
};

export default EventItem;
