class FavouriteCitiesController < ApplicationController

  def create
    @user = User.find_by(email: params[:email])
    @user.favourite_cities.build(name: params[:name])
    if @user.save
      render :json => @user, :include => [:favourite_cities]
    end
  end
end
