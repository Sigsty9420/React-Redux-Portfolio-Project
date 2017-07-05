import React, { Component } from 'react';
import './App.css';
import DropDown from '../containers/DropDown';
import MainCity from '../containers/MainCity'


class App extends Component {

  render() {
    return (
      <div>
      <h1 className="text-center">Nomad City Teleporter</h1>
        <DropDown />
        <br />
        <MainCity />
      </div>
      );
  }
}

export default App;
