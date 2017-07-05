import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainCity extends Component {
  render(){
    return (
      <div className="row">
        <h2 className="text-center">{this.props.city.name}</h2>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {city: state.selectedCity.city }
}


export default connect(mapStateToProps)(MainCity);
