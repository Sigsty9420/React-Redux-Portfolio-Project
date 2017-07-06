import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Pollution &nbsp;<span className="glyphicon glyphicon-fire" aria-hidden="true" /></h3>
      <p>Air quality Teleport score - {props.airQualityScore}</p>
      <p>Cleanliness Teleport score - {props.cleanlinessScore}</p>
      <p>Drinking water quality Teleport score - {props.drinkingWaterScore}</p>
      <p>Urban greenery Teleport score - {props.urbanGreeneryScore}</p>
    </div>
  );
}
