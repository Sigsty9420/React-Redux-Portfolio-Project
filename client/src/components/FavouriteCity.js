import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { getUserCity } from '../actions/userCities';
import CityDropDown from '../containers/CityDropDown';


class FavouriteCity extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {email: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({email: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getUserCity(this.state.email);
  }

  render() {
    const { userCities } = this.props;
      return (
        <div className="col-md-offset-4 col-md-4">
          <br />
          <form className="input-group" onSubmit={this.onFormSubmit}>
            <input
              placeholder="Please enter your email address"
              className="form-control"
              onChange={this.onInputChange}
              />
            <br />
            <br />
              <button type="submit" className="btn btn-secondary">Submit</button>
          </form>
          <CityDropDown userEmail={this.state.email} />
          { userCities && userCities.map((value, key) => {
            return (
              <div key={key}>
                <p>{value.city}</p>
              </div>
            )
          })}
        </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserCity }, dispatch)
}

function mapStateToProps(state){
  return {userCities: state.cities.userCities }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCity);
