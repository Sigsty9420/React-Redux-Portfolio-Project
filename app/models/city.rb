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
    city.update_attributes(city_attributes)
  end

end
