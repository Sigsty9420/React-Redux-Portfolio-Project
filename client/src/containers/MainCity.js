import React, { Component } from 'react';
import { connect } from 'react-redux';
import General from '../components/details/general'
import Climate from '../components/details/climate'
import CostOfLiving from '../components/details/cost_of_living'
import Business from '../components/details/business'
import Culture from '../components/details/culture'
import Economics from '../components/details/economics'
import Education from '../components/details/education'
import Healthcare from '../components/details/healthcare'
import InternetAccess from '../components/details/internet_access'
import Outdoors from '../components/details/outdoors'
import Pollution from '../components/details/pollution'
import Safety from '../components/details/safety'


class MainCity extends Component {
  render(){
    return (
      <div className="row">
        <h2 className="text-center">{this.props.city.name}</h2>
        <div className="col-md-offset-4 col-md-4">
          <General name={this.props.city.name}
          population={this.props.city.urban_area_population_millions}
          populationDensity={this.props.city.population_density_in_people_sq_km_in_ua_center}
          />
          <Climate />
          <CostOfLiving />
          <Business />
          <Culture />
          <Economics />
          <Education />
          <Healthcare />
          <InternetAccess />
          <Outdoors />
          <Pollution />
          <Safety />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {city: state.selectedCity.city }
}


export default connect(mapStateToProps)(MainCity);
