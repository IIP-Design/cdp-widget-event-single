import moment from 'moment';

import { setDateLocale } from './localization';
import { checkForX } from './helpers';

import logoYali from '../assets/logo_yali.svg';
import logoYlai from '../assets/logo_ylai.svg';
import logoShareamerica from '../assets/logo_shareamerica.svg';

const logos = [
  { name: 'yali', logo: logoYali },
  { name: 'ylai', logo: logoYlai },
  { name: 'share', logo: logoShareamerica }
];

const getLogo = ( site ) => {
  const siteLogo = logos.filter( logo => site.indexOf( logo.name ) > -1 );
  if ( siteLogo[0] && siteLogo[0].logo ) {
    return siteLogo[0].logo;
  }
  return '';
};

const getDate = ( lang, date ) => {
  setDateLocale( lang );
  const localizedDate = moment( date ).format( 'LL' );
  return localizedDate;
};

const getImage = ( thumbnails ) => {
  if ( thumbnails.large && thumbnails.large.url ) {
    return thumbnails.large.url;
  } else if ( thumbnails.full && thumbnails.full.url ) {
    return thumbnails.full.url;
  }
  return null;
};

const getImageMeta = ( thumbnail ) => {
  const imageMeta = {
    alt: ( thumbnail.alt ? thumbnail.alt : ' ' ),
    caption: ( thumbnail.caption ? thumbnail.caption : '' )
  };

  return imageMeta;
};

export const normalizeItem = ( data ) => {
  const obj = {
    dateStart: data.date,
    dateEnd: checkForX( data.multiDay ) ? data.endDate : data.date,
    description: data.description,
    timeStart: checkForX( data.hasTime ) ? data.time : null,
    timeEnd: data.duration || '',
    title: data.title,
    thumbnail: data.thumbnail
  };

  return { ...obj };
};
