import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


export default class DropDown extends Component {

  constructor(props){
    super(props);

    this.state = { selectedCity: ''}

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selection) {
    this.setState({ selectedCity: selection.label  })
  }



  render(){

    const options = [
      { value: 'austin', label: 'Austin' },
      { value: 'cape-town', label: 'Cape Town' }
    ]

    return (
      <Select
        name="form-field-name"
        value="What does this do?"
        options={options}
        onChange={this.handleSelect}
        autofocus
        placeholder="Select a city..."
        className="container col-md-4 col-md-offset-4"
      />

    )
  }
}
