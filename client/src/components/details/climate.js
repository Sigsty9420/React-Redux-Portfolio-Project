import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Climate &nbsp;<span className="glyphicon glyphicon-tree-deciduous" aria-hidden="true" /></h3>
      <p>Average day length - {props.dayLength}</p>
      <p>Average number of rainy days per year - {props.rainyDays}</p>
      <p>Average high temperature (Celcius) - {props.highTemp}</p>
      <p>Average low temperature (Celcius) - {props.lowTemp}</p>
      <p>Weather type - {props.weatherType}</p>
    </div>
  );
}
