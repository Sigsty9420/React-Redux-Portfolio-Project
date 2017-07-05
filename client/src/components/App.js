import React, { Component } from 'react';
import './App.css';
import DropDown from '../containers/DropDown';


class App extends Component {

  render() {
    return (
        <div>
          <h1 className="text-center">Nomad City Teleporter</h1>
          <DropDown />
          {this.props.children}
        </div>
      );
  }
}

export default App;
