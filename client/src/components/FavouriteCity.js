import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { getUserCity } from '../actions/userCities';
import CityDropDown from '../containers/CityDropDown';


class FavouriteCity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      votedCity: {},
    };


    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getUserCity(this.state.username);
  }

  upVote = city => {
    if (city.name in this.state.votedCity ) {
      let tempCity = this.state.votedCity
      tempCity[city.name] = tempCity[city.name] + 1
      this.setState({
        votedCity: tempCity
      })
    } else {
      let tempCity = this.state.votedCity
      tempCity[city.name] = 1
      this.setState({votedCity: tempCity})
    }
  }

  render() {
    const { userCities } = this.props;

    console.log(this.state)

    return (
      <div className="col-md-offset-4 col-md-4">
        <br />
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            name="username"
            placeholder="Please enter your username"
            className="form-control"
            onChange={this.onInputChange}
          />
          <br />
          <br />
            <button type="submit" className="btn btn-secondary" >Submit</button>
        </form>

        <CityDropDown username={this.state.username} />

        { userCities &&
          userCities.map((city, key) =>
            <div key={key}>
              <p>{city.name} - {this.state.votedCity[city.name]}</p>
              <button onClick={() => this.upVote(city)}
                className="btn btn-secondary"
              >
                Submit
              </button>
            </div>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {userCities: state.cities.userCities }
}

export default connect(mapStateToProps, { getUserCity })(FavouriteCity);
