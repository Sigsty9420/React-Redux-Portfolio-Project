import React from 'react';

export default (props) => {
  return (
    <div>
      <h3 className="text-center">Internet Access &nbsp;<span className="glyphicon glyphicon-signal" aria-hidden="true" /></h3>
      <p>Download speed - {props.downloadSpeed}</p>
      <p>Internet access (download) Teleport score - {props.downloadScore}</p>
      <p>Upload speed - {props.uploadSpeed}</p>
      <p>Internet access (upload) Teleport score - {props.uploadScore}</p>
    </div>
  );
}
