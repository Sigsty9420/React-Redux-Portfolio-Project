import React from 'react';
import ProgressBar from "bootstrap-progress-bar";

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Cost of living &nbsp;<span className="glyphicon glyphicon-piggy-bank" aria-hidden="true" /></h3>

      <h4><u>Housing costs</u></h4>

      <p>Large apartment monthly rental - ${props.largeRent} USD</p>
      <p>Medium apartment monthly rental - ${props.mediumRent} USD</p>
      <p>Small apartment monthly rental - ${props.smallRent} USD</p>
      <p>Rent index Teleport Score - {props.rentScore}<ProgressBar width={props.rentScore * 510} message={props.rentScore * 100}/></p>

      <h4><u>Food costs</u></h4>

      <p>A kilogram of apples - ${props.apples} USD </p>
      <p>Bread - ${props.bread} USD </p>
      <p>A cappuccino - ${props.cuppuccino} USD </p>
      <p>An imported beer - ${props.beer} USD </p>
      <p>Lunch at a restaurant - ${props.restaurant} USD </p>

      <h4><u>Other costs</u></h4>

      <p>Movie ticket - ${props.movie} USD </p>
      <p>Monthly fitness club membership - ${props.fitness} USD </p>
      <p>Monthly public transport - ${props.publicTransport} USD </p>
      <p>5km taxi ride - ${props.taxi} USD </p>
    </div>
  );
}
