import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchCities } from '../actions/fetchCities'
import { fetchDetails } from '../actions/fetchDetails'


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
    this.props.fetchDetails(selection.value)
  }

  makeList() {
    let list = []
    this.props.cities.cities.map((city) => {
      return list.push({value: city.id, label: city.name})
    })
    return list
  }

  render(){

    const options = this.makeList();

    return (
      <div>
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
        <div className="row" />
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCities, fetchDetails }, dispatch)
}

function mapStateToProps(cities){
  return {cities: cities.cities }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
