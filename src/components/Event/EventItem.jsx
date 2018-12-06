import React from 'react';
import { object } from 'prop-types';

import AddToCalendar from '../AddToCalendar/AddToCalendar';

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
      <section className="cdp-event-single-meta-container">
        <div className="cdp-event-single-meta">
          <p><strong>When: </strong>{ data.dateStart }</p>
          <p><strong>Language: </strong></p>
          <p><strong>Event Page: </strong></p>
          <p><strong>Organizer: </strong></p>
        </div>
        <AddToCalendar />
      </section>
      { data.description && (
        <section className="cdp-event-single-desc-container">
          <h3 className="cdp-event-single-title">Description</h3>
          <p className="cdp-event-single-description">{ data.description }</p>
        </section>
      ) }
      { data.speakers && (
        <section className="cdp-event-single-speakers-container">
          <h3 className="cdp-event-single-title">Speakers</h3>
          <div className="cdp-event-single-speakers"> { data.speakers } </div>
        </section>
      ) }
    </div>
  </article>
);

EventItem.propTypes = {
  data: object
};

export default EventItem;
