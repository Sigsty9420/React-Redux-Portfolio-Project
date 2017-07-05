import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Safety</h3>
      <p>Crime rate Teleport score - {props.airQualityScore}</p>
      <p>Gun-related deaths per 100,000 residents per year - {props.airQualityScore}</p>
      <p>Guns per 100 residents - {props.airQualityScore}</p>
    </div>  
  );
}
