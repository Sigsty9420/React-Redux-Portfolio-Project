import React, { Component } from 'react';
import Select from 'react-select';


export default class DropDown extends Component {



  render(){

    var Select = require('react-select');

      var options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ];

      function logChange(val) {
        console.log("Selected: " + JSON.stringify(val));
      }

    return (
      <Select
        name="form-field-name"
        value="one"
        options={options}
        onChange={logChange}
      />

    )
  }
}
