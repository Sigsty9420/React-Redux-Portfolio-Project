require 'pry'
class UsersController < ApplicationController

  def find_or_create
    @user = User.find_or_create_by(username: params[:username])
    render :json => @user, :include => [:favourite_cities]
  end

  def add_city
    @user = User.find_or_create_by(username: params[:username])
    @user.favourite_cities.build(name: params["_json"])
    if @user.save
      render json: @user, :include => [:favourite_cities]
    end
  end

  def params
    request.parameters
  end
end
