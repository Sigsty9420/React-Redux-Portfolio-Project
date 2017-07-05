import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Cost of living</h3>

      <h4><u>Housing costs</u></h4>

      <p>Large apartment monthly rental - {props.largeRent}</p>
      <p>Medium apartment monthly rental - {props.mediumRent}</p>
      <p>Small apartment monthly rental - {props.smallRent}</p>
      <p>Rent index Teleport Score - {props.rentScore}</p>

      <h4><u>Food costs</u></h4>

      <p>A kilogram of apples - {props.apples} </p>
      <p>Bread - {props.bread} </p>
      <p>A cappuccino - {props.cuppuccino} </p>
      <p>An imported beer - {props.beer} </p>
      <p>Lunch at a restaurant - {props.restaurant} </p>

      <h4><u>Other costs</u></h4>

      <p>Movie ticket - {props.movie} </p>
      <p>Monthly fitness club membership - {props.fitness} </p>
      <p>Monthly public transport - {props.publicTransport} </p>
      <p>5km taxi ride - {props.taxi} </p>
    </div>
  );
}
