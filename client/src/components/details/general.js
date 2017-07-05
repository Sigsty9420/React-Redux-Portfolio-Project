import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">General information</h3>
      <p>Full name - {props.name}</p>
      <p>Population - {props.population} million</p>
      <p>Population density - { (props.populationDensity) ? props.populationDensity.toFixed(2) : null } people/sq km in city center</p>
      <p>Spoken languages - {props.languages}</p>
    </div>
  );
}
