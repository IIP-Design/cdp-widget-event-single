import React, { Component } from 'react';
import { object } from 'prop-types';

import EventItem from '../components/Event/EventItem';
import Branding from '../components/Branding/Branding';
import Placeholder from '../components/Placeholder/Placeholder';

import { getItemRequest2 } from '../utils/api';
import trans from '../utils/translations';
import { normalizeItem } from '../utils/parser';


class EventContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      error: null,
      isLoading: true,
      noResults: false,
      data: {},
      translations: trans.en
    };
  }

  componentDidMount() {
    this.getData();
  }

  onError = ( error ) => {
    console.log( `Error: ${error.message}` );
    this.setState( {
      error,
      isLoading: false
    } );
  }

  onFetchResult = ( response ) => {
    if ( !response ) {
      console.log( 'Your request returned no responses. This could be because the owner has removed this content. Please double check the post ID and index in your request.' );
      this.setState( {
        isLoading: false,
        noResults: true
      } );
    } else {
      const data = normalizeItem( response );

      this.setState( {
        isLoading: false,
        data
      } );
    }
  }

  getData() {
    const { config } = this.props;

    getItemRequest2( config.sites, config.ids )
      .then( response => this.onFetchResult( response ) )
      .catch( error => this.onError( error ) );
  }

  render() {
    const {
      error, isLoading, noResults, data, translations
    } = this.state;

    if ( error ) {
      return (
        <div className="cdp-error-message" style={ { textAlign: 'center', margin: '3em 0' } }>
          <h3>Sorry, there appears to have been an error while retrieving this content.</h3>
        </div>
      );
    } else if ( isLoading ) {
      return <Placeholder />;
    } else if ( noResults ) {
      return (
        <div className="cdp-error-message" style={ { textAlign: 'center', margin: '3em 0' } }>
          <h3>Sorry, it looks like this content is currently unavailable.</h3>
        </div>
      );
    }

    return (
      <div className="cdp-article-single-container">
        <EventItem data={ data } lang={ translations } />
        <Branding data={ data } lang={ translations } />
      </div>
    );
  }
}

EventContainer.propTypes = {
  config: object
};

export default EventContainer;
