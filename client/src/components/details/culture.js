import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Culture</h3>

      <p>Art galleries - {props.artGalleries}</p>
      <p>Cinemas - {props.cinemas}</p>
      <p>Comedy clubs - {props.comedyClubs}</p>
      <p>Concert venues - {props.concertVenues}</p>
      <p>Historical sites - {props.historicalSites}</p>
      <p>Museums - {props.museums}</p>
      <p>Performing art venues - {props.performingArtVenues}</p>
      <p>Sport venues - {props.sportVenues}</p>
      <p>Zoos - {props.zoos}</p>
    </div>
  );
}
