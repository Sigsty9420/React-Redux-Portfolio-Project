import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Outdoors</h3>
      <p>Urban area elevation (meters) - {props.urbanElevation}</p>
      <p>Presence of hills in city - {props.hillsPresence}</p>
      <p>Presence of mountains in city - {props.mountainsPresence}</p>
      <p>Water access Teleport score - {props.waterAccessScore}</p>
      <p>Seaside access:</p>
  );
}
