import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  
  search() {
    console.log('this.state', this.state);
  }

  render() {
    return (
      <FormGroup>
        <InputGroup>
           <FormControl
           type="text"
           placeholder="Search for a city"
           value={this.state.query}
           onChange={event => {this.setState({query: event.target.value})}}
           onKeyPress={event => {
             if (event.key === 'Enter') {
               this.search()
             }
           }}
           />
           <InputGroup.Addon onClick={() => this.search()}>
             <Glyphicon glyph="search"></Glyphicon>
           </InputGroup.Addon>
         </InputGroup>
       </FormGroup>
    )
  }
}

export default SearchForm;
