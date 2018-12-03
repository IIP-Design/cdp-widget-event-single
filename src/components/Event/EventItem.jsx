import React, { Fragment } from 'react';
import Parser from 'html-react-parser';
import { object } from 'prop-types';

import './EventItem.css';

const EventItem = ( { data } ) => (
  <article className="cdp-event-single">
    { data.thumbnail && (
      <div className="cdp-event-single-media">
        <figure className="aligncenter">
          <img className="cdp-event-single-feat-img" src={ data.thumbnail } alt={ data.thumbnailMeta.alt } />
          <figcaption className="cdp-event-single-feat-cap">{ data.thumbnailMeta.caption }</figcaption>
        </figure>
      </div>
    ) }
    <div className="cdp-event-single-content">
      <h1 className="cdp-event-single-title">{ data.title }</h1>
      <div className="cdp-event-single-meta">{ data.date }</div>
      { data.description && (
        <Fragment>
          <h2 className="cdp-event-single-title">Description</h2>
          <div className="cdp-event-single-content"> { data.description } </div>
        </Fragment>
      ) }
      { data.speakers && (
        <Fragment>
          <h2 className="cdp-event-single-title">Speakers</h2>
          <div className="cdp-event-single-content"> { data.speakers } </div>
        </Fragment>
      ) }
    </div>
  </article>
);

EventItem.propTypes = {
  data: object
};

export default EventItem;
