import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchCities } from '../actions/fetchCities'


class DropDown extends Component {

  constructor(props){
    super(props);
    this.state = { selectedCity: '',}

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.props.fetchCities();
    this.makeList();
  }

  handleSelect(selection) {
    this.setState({ selectedCity: selection.label  })
    console.log(selection)
  }

  makeList() {
    let list = []
    this.props.cities.cities.map((city) => {
      let name = city.name
      debugger;
      return list.push({value: name, label: name})
    })
    return list
  }

  render(){

    const options = this.makeList();

    return (
      <Select
        name="form-field-name"
        value="What does this do?"
        options={options}
        onChange={this.handleSelect}
        autofocus={true}
        autoBlur={true}
        isLoading={this.props.cities.loading}
        placeholder="Select a city..."
        className="container col-md-4 col-md-offset-4"
      />

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCities }, dispatch)
}

function mapStateToProps(cities){
  return {cities: cities.cities }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
