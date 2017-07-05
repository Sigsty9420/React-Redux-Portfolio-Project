import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Education</h3>
      <p>University quality Teleport score - {props.universityScore}</p>
      <p>Best university in ranking - {props.bestUniversity}</p>
      <p>Best university ranking - {props.universityRank}</p>
    </div>
  );
}
