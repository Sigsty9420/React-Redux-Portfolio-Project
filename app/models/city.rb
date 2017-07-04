require 'httparty'
require 'rubygems'
require 'pry'

class City < ApplicationRecord
  include HTTParty
  validates :name, uniqueness: true

  def self.get_cities
    response = HTTParty.get("https://api.teleport.org/api/urban_areas/")
    if response.success?
      response['_links']['ua:item'].each do |city|
        self.create(name: city['name'], url: city['href'])
      end
    else
      raise response.response
    end
  end

  def self.get_details(city_name)
    city = self.find_by(name: city_name)
    response = HTTParty.get(city.url + 'details/')
    city_attributes = {}
    cat = response['categories']
    cat.each do |info|
      info["data"].each do |attributes|

        if attributes["float_value"]
          city_attributes[attributes["label"].parameterize.underscore.to_sym] = attributes["float_value"]
        elsif attributes["string_value"]
          city_attributes[attributes["id"].parameterize.underscore.to_sym] = attributes["string_value"]
        elsif attributes["currency_dollar_value"]
          city_attributes[attributes["id"].parameterize.underscore.to_sym] = attributes["currency_dollar_value"]
        elsif attributes["int_value"]
          city_attributes[attributes["id"].parameterize.underscore.to_sym] = attributes["int_value"]
        elsif attributes["percent_value"]
          city_attributes[attributes["id"].parameterize.underscore.to_sym] = attributes["percent_value"]
        end
      end

    end
    
  end

end
    # city.population = cat[1][data][0][float_value]
    # city.population_density = cat[1][data][1][float_value]
    # city.day_length = cat[2][data][0][float_value]
    # city.rainy_days = cat[2][data][1][float_value]
    # city.sunny_days = cat[1][data][0][float_value]
    # city.high_temp = cat[1][data][0][float_value]
    # city.low_temp = cat[1][data][0][float_value]
    # city.weather_type = cat[1][data][0][float_value]
    # city.large_apartment_rent = cat[1][data][0][float_value]
    # city.medium_apartment_rent = cat[1][data][0][float_value]
    # city.small_apartment_rent = cat[1][data][0][float_value]
    # city.rent_score = cat[1][data][0][float_value]
    # city.apples_cost = cat[1][data][0][float_value]
    # city.bread_cost = cat[1][data][0][float_value]
    # city.cappuccino_cost = cat[1][data][0][float_value]
    # city.beer_cost = cat[1][data][0][float_value]
    # city.lunch_cost = cat[1][data][0][float_value]
    # city.movie_cost = cat[1][data][0][float_value]
    # city.gym_cost = cat[1][data][0][float_value]
    # city.public_transport_cost = cat[1][data][0][float_value]
    # city.taxi_ride_cost = cat[1][data][0][float_value]
    # city.business_freedom_score = cat[1][data][0][float_value]
    # city.corruption_score = cat[1][data][0][float_value]
    # city.labor_resctrictions_score = cat[1][data][0][float_value]
    # city.open_business_score = cat[1][data][0][float_value]
    # city.amount_galleries = cat[1][data][0][float_value]
    # city.amount_cinemas = cat[1][data][0][float_value]
    # city.amount_comedy_clubs = cat[1][data][0][float_value]
    # city.amount_concert_venues = cat[1][data][0][float_value]
    # city.amount_historical_sites = cat[1][data][0][float_value]
    # city.amount_musueums = cat[1][data][0][float_value]
    # city.amount_performing_art_venues = cat[1][data][0][float_value]
    # city.amount_sport_venues = cat[1][data][0][float_value]
    # city.amount_zoos = cat[1][data][0][float_value]
    # city.currency = cat[1][data][0][float_value]
    # city.currency_exchange_per_usd = cat[1][data][0][float_value]
    # city.gdp_growth = cat[1][data][0][float_value]
    # city.gdp_per_capita = cat[1][data][0][float_value]
    # city.university_quality_score = cat[1][data][0][float_value]
    # city.best_university_name = cat[1][data][0][float_value]
    # city.best_university_ranking = cat[1][data][0][float_value]
    # city.healthcare_cost_score = cat[1][data][0][float_value]
    # city.life_expectancy = cat[1][data][0][float_value]
    # city.healthcare_quality_score = cat[1][data][0][float_value]
    # city.percentage_elderly = cat[1][data][0][float_value]
    # city.spoken_languages = cat[1][data][0][float_value]
    # city.unemployment_rate = cat[1][data][0][float_value]
    # city.startup_job_score = cat[1][data][0][float_value]
    # city.startup_salary = cat[1][data][0][float_value]
    # city.download_speed = cat[1][data][0][float_value]
    # city.download_speed_score = cat[1][data][0][float_value]
    # city.upload_speed = cat[1][data][0][float_value]
    # city.upload_speed_score = cat[1][data][0][float_value]
    # city.urban_elevation = cat[1][data][0][float_value]
    # city.hills = cat[1][data][0][float_value]
    # city.mountains = cat[1][data][0][float_value]
    # city.water_access_score = cat[1][data][0][float_value]
    # city.seaside_access = cat[1][data][0][float_value]
    # city.air_quality_score = cat[1][data][0][float_value]
    # city.cleanliness_score = cat[1][data][0][float_value]
    # city.water_quality_score = cat[1][data][0][float_value]
    # city.urban_greenery_score = cat[1][data][0][float_value]
    # city.crime_rate_score = cat[1][data][0][float_value]
    # city.gun_related_deaths = cat[1][data][0][float_value]
    # city.guns_per_100 = cat[1][data][0][float_value]
    # city.cowork_space_score = cat[1][data][0][float_value]
    # city.amount_coworking_spaces = cat[1][data][0][float_value]
    # city.startup_events = cat[1][data][0][float_value]
    # city.startup_events_per_year = cat[1][data][0][float_value]
    # city.amount_startups = cat[1][data][0][float_value]
    # city.amount_meetup_groups = cat[1][data][0][float_value]
    # city.amount_meetup_members = cat[1][data][0][float_value]
    # city.amount_investors = cat[1][data][0][float_value]
    # city.startup_climate_score = cat[1][data][0][float_value]
    # city.venture_capital_score = cat[1][data][0][float_value]
    # city.amount_accelerators = cat[1][data][0][float_value]
    # city.corporate_tax_rate = cat[1][data][0][float_value]
    # city.income_tax_score = cat[1][data][0][float_value]
    # city.vat = cat[1][data][0][float_value]


# end
