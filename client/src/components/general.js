import React from 'react';

export default (props) => {
  return (
    <div className="container col-md-4 col-md-offset-4">
      <h2 className="text-center">General information:</h2>
      <p>Full name - {props.name}</p>
      <p>Population - {props.population} million</p>
    </div>
  );
}
