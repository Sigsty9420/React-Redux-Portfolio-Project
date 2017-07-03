require 'httparty'
require 'rubygems'
require 'pry'

class City < ApplicationRecord
  include HTTParty
  format :json

  def self.get_cities
    response = HTTParty.get("https://api.teleport.org/api/urban_areas/")
    if response.success?
      response['_links']['ua:item'].each do |city|
        binding.pry
        self.new()
      end
    else
      raise response.response
    end
  end

end
