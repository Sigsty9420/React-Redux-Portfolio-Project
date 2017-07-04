class CitiesController < ApplicationController

  def index
    render json: City.all
  end

  def show
    @city = City.find(params[:id])
    render json: @city
  end
end
