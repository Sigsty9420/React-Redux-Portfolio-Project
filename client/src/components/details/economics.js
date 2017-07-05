import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Economics</h3>
      <p>Currency used - {props.currency}</p>
      <p>Crreucny exchange rate per US dollar - {props.exchangeRate}</p>
      <p>GDP growth rate - {props.gdpGrowth}</p>
      <p>GDP per capita - {props.gdpPerCapita}</p>
    </div>
  );
}
