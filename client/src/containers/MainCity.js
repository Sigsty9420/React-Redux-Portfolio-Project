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
import { bindActionCreators} from 'redux';
import { fetchDetails } from '../actions/fetchDetails'


class MainCity extends Component {
  setParams () {

  }

  render(){
    if (!this.props.city.name) {
      this.props.fetchDetails(this.props.match.params.id)
    }

    return (
      <div className="row">
        <h2 className="text-center">{this.props.city.name}</h2>
        <div className="col-md-offset-4 col-md-4">
          <General
          name={this.props.city.name}
          population={this.props.city.urban_area_population_millions}
          populationDensity={this.props.city.population_density_in_people_sq_km_in_ua_center}
          languages={this.props.city.spoken_languages}
          />
          <Climate
          dayLength={this.props.city.average_day_length_hours}
          rainyDays={this.props.city.average_number_of_rainy_days_per_year}
          highTemp={this.props.city.weather_average_high}
          lowTemp={this.props.city.weather_average_low}
          weatherType={this.props.city.weather_type} />
          <CostOfLiving
          largeRent={this.props.city.apartment_rent_large}
          mediumRent={this.props.city.apartment_rent_medium}
          smallRent={this.props.city.apartment_rent_small} rentScore={this.props.city.rent_index_teleport_score}
          apples={this.props.city.cost_apples}
          bread={this.props.city.cost_bread}
          cappuccino={this.props.city.cost_cappuccino}
          beer={this.props.city.cost_import_beer}
          restaurant={this.props.city.cost_restaurant_meal}
          movie={this.props.city.cost_cinema}
          fitness={this.props.city.cost_fitness_club}
          publicTransport={this.props.city.cost_public_transport}
          taxi={this.props.city.cost_taxi}
          />

          <Business
          freedomScore={this.props.city.business_freedom_teleport_score}
          corruptionScore={this.props.city.freedom_from_corruption_teleport_score}
          laborRestrictionsScore={this.props.city.lack_of_labor_restrictions_teleport_score}
          openBusinessScore={this.props.city.time_to_open_a_business_teleport_score}
          coworkScore={this.props.city.coworking_spaces_teleport_score}
          coworkCount={this.props.city.workfrom_coworking_spaces_count}
          startupEvents={this.props.city.events_count}
          totalStartups={this.props.city.funderbeam_total_startups}
          meetupsGroups={this.props.city.meetups_groups}
          meetupsMembers={this.props.city.meetups_members}
          investorCount={this.props.city.startup_climate_investors}
          startupClimateScore={this.props.city.startup_climate_scene_teleport_score}
          vcScore={this.props.city.venture_capital_teleport_score}
          acceleratorCount={this.props.city.funding_accelerators}
          corporateTax={this.props.city.company_profit_tax_rate}
          incomeTaxScore={this.props.city.income_tax_level_teleport_score}
          vat={this.props.city.tax_vat}

          unemployment={this.props.city.unemployment_rate}
          startupJobScore={this.props.city.startup_job_availability_teleport_score}
          startupSalary={this.props.city.startup_salaries_detail}
          />

          <Culture artGalleries={this.props.city.culture_art_galleries_venue_count}
          cinemas={this.props.city.culture_cinemas_venue_count}
          comedyClubs={this.props.city.culture_comedy_clubs_venue_count}
          concertVenues={this.props.city.culture_concerts_venue_count}
          historicalSites={this.props.city.culture_historical_sites_venue_count}
          museums={this.props.city.culture_museums_venue_count}
          performingArtVenues={this.props.city.culture_performing_arts_venue_count}
          sportVenues={this.props.city.culture_sports_venue_count}
          zoos={this.props.city.culture_zoos_venue_count}
          />

          <Economics currency={this.props.city.currency_urban_area}
          exchangeRate={this.props.city.currency_exchange_rate_per_us_dollar_for_urban_area}
          gdpGrowth={this.props.city.gdp_growth_rate} gdpPerCapita={this.props.city.gdp_per_capita}/>

          <Education
          universityScore={this.props.city.university_quality_teleport_score}
          bestUniversity={this.props.city.universities_best_ranked_name}
          universityRank={this.props.city.universities_best_ranked_rank}
          />

          <Healthcare
          healthcareCostScore={this.props.city.healthcare_expenditure_teleport_score}
          lifeExpectancy={this.props.city.life_expectancy_years}
          healthcareQualityScore={this.props.city.healthcare_quality_teleport_score}
          />

          <InternetAccess
          downloadSpeed={this.props.city.download_speed_mbps}
          downloadScore={this.props.city.internet_access_download_teleport_score}
          uploadSpeed={this.props.city.upload_speed_mbps}
          uploadScore={this.props.city.internet_access_upload_teleport_score}/>

          <Outdoors
          urbanElevation={this.props.city.urban_area_elevation_meters}
          hillsPresence={this.props.city.presence_of_hills_in_city}
          mountainsPresence={this.props.city.presence_of_mountains_in_city}
          waterAccessScore={this.props.city.water_access_teleport_score}
          />

          <Pollution
          airQualityScore={this.props.city.air_quality_teleport_score}
          cleanlinessScore={this.props.city.cleanliness_teleport_score}
          drinkingWaterScore={this.props.city.drinking_water_quality_teleport_score}
          urbanGreeneryScore={this.props.city.urban_greenery_teleport_score}/>

          <Safety
          crimeRateScore={this.props.city.crime_rate_teleport_score}
          gunDeaths={this.props.city.gun_death_rate}
          gunsPerResidents={this.props.city.gun_ownership}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetails }, dispatch)
}

function mapStateToProps(state){
  return {city: state.selectedCity.city}
}


export default connect(mapStateToProps, mapDispatchToProps)(MainCity);
