import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title"><h2>City Teleporter</h2></div>
        <div>
          <input placeholder="Search for a city..."/>
          <button>Submit</button>
        </div>
        <div className="City-details">
        
          <div><h3>General</h3>
            <p>City name:</p>
            <p>Country:</p>
            <p>City population:</p>
          </div>

          <div><h3>City Size</h3>
            <p>City population:</p>
            <p>Population density in people/sq km in city center:</p>
          </div>

          <div><h3>Climate</h3>
            <p>Average day lenght:</p>
            <p>Average number of rainy days per year:</p>
            <p>Average high temperature (Celcius):</p>
            <p>Average low temperature (Celcius):</p>
            <p>Weather type:</p>
          </div>

          <div><h3>Cost of living</h3>

            <h4>Housing costs:</h4>

            <p>Large apartment monthly rental:</p>
            <p>Medium apartment monthly rental:</p>
            <p>Small apartment monthly rental:</p>
            <p>Rent index Teleport Score:</p>

            <h4>Food costs:</h4>

            <p>A kilogram of apples:</p>
            <p>Bread:</p>
            <p>A cappuccino:</p>
            <p>An imported beer:</p>
            <p>Lunch at a restaurant:</p>

            <h4>Other costs:</h4>

            <p>Movie ticket:</p>
            <p>Monthly fitness club membership:</p>
            <p>Monthly public transport:</p>
            <p>5km taxi ride:</p>
          </div>

          <div><h3>Business Freedom</h3>
            <p>Business freedom Teleport score:</p>
            <p>Freedom from corruption Teleport score:</p>
            <p>Lack of labor restrictions Teleport score:</p>
            <p>Time to open a business Teleport score:</p>
          </div>

          <div><h3>Culture</h3>
            <p>Art galleries:</p>
            <p>Cinemas:</p>
            <p>Comedy clubs:</p>
            <p>Concert venues:</p>
            <p>Historical sites:</p>
            <p>Museums:</p>
            <p>Performing art venues:</p>
            <p>Sport venues:</p>
            <p>Zoos:</p>
          </div>

          <div><h3>Economics</h3>
            <p>Currency used:</p>
            <p>Crreucny exchange rate per US dollar:</p>
            <p>GDP growth rate:</p>
            <p>GDP per capita:</p>
          </div>

          <div><h3>Education</h3>
            <p>University quality Teleport score:</p>
            <p>Best university in ranking:</p>
            <p>Best university ranking:</p>
          </div>

          <div><h3>Healthcare</h3>
            <p>Healthcare cost Teleport score:</p>
            <p>Life expectancy (years):</p>
            <p>Healthcare quality Teleport score:</p>
          </div>

          <div><h3>Demographics</h3>
            <p>Percentage of elderly people (65+ years) in country:</p>
            <p>Life expectancy at birth:</p>
            <p>Spoken languages:</p>
          </div>

          <div><h3>Job Market</h3>
            <p>Unemployment rate:</p>
            <p>Startup job availability Teleport score:</p>
            <p>Startup salary:</p>
          </div>

          <div><h3>Internet Access</h3>
            <p>Download speed:</p>
            <p>Internet access (download) Teleport score:</p>
            <p>Upload speed:</p>
            <p>Internet access (upload) Teleport score:</p>
          </div>

          <div><h3>Outdoors</h3>
            <p>Urban area elevation (meters):</p>
            <p>Presence of hills in city:</p>
            <p>Presence of mountains in city:</p>
            <p>Water access Teleport score:</p>
            <p>Seaside access:</p>
          </div>

          <div><h3>Pollution</h3>
            <p>Air quality Teleport score:</p>
            <p>Cleanliness Teleport score:</p>
            <p>Drinking water quality Teleport score:</p>
            <p>Urban greenery Teleport score:</p>
          </div>

          <div><h3>Safety</h3>
            <p>Crime rate Teleport score:</p>
            <p>Gun-related deaths per 100,000 residents per year:</p>
            <p>Guns per 100 residents:</p>
          </div>

          <div><h3>Startups</h3>
            <p>Coworking spaces Teleport score:</p>
            <p>Coworking spaces on WorkFrom.co:</p>
            <p>Startup events:</p>
            <p>Number of startup events in the last 12 months:</p>
            <p>Total number of startups:</p>
            <p>Meetups groups:</p>
            <p>Meetups members:</p>
            <p>Number of investors:</p>
            <p>Startup climate scene Teleport score:</p>
            <p>Venture capital Teleport score:</p>
            <p>Number of funding accelerators:</p>
          </div>

          <div><h3>Taxation</h3>
            <p>Corporate tax (% of profit):</p>
            <p>Income tax level Teleport score:</p>
            <p>VAT (sales tax):</p>
          </div>


          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
