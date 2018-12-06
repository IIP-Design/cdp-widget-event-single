import axios from 'axios';
import bodybuilder from 'bodybuilder';

const CDP_PUBLIC_API = `${process.env.REACT_APP_CDP_PUBLIC_API}/v1/search`;
const INTER_API = 'http://interactive.dev.local/wp-json/iip-events/v1/events/';

export const getItemRequest = ( site, postId ) =>
  axios
    .post( CDP_PUBLIC_API, {
      body: bodybuilder()
        .size( 1 )
        .query( 'query_string', 'query', `(site: ${site} AND post_id: ${postId})` )
        .build()
    } )
    .then( response => response.data );

export const getItemRequest2 = ( site, postId ) =>
  axios
    .get( `${INTER_API}${postId}` )
    .then( response => response.data );
