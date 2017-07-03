require 'httparty'
require 'rubygems'
require 'pry'

class City < ApplicationRecord
  validates :name, uniqueness: true

  include HTTParty
  format :json



  def self.get_cities
    response = HTTParty.get("https://api.teleport.org/api/urban_areas/")
    if response.success?
      response['_links']['ua:item'].each do |city|
        self.create(name: city['name'], url: city['url'])
      end
    else
      raise response.response
    end
  end

end
