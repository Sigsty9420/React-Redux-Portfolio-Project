import React, { Component } from 'react';
import './App.css';
import DropDown from '../containers/DropDown';
import 'react-select/dist/react-select.css';

class App extends Component {

  render() {
    return (
      <div>
        <DropDown />
      </div>
      );
  }
}

export default App;
