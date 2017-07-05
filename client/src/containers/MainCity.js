import React, { Component } from 'react';
import { connect } from 'react-redux';
import General from '../components/details/general'

class MainCity extends Component {
  render(){
    return (
      <div className="row">
        <h2 className="text-center">{this.props.city.name}</h2>
        <div className="col-md-offset-4">
        <General name={this.props.city.name} population={this.props.city.urban_area_population_millions} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {city: state.selectedCity.city }
}


export default connect(mapStateToProps)(MainCity);
