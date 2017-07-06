class UsersController < ApplicationController

  def find_or_create
    @user = User.find_or_creat_by(email: params[:email])
    render :json => @user, :include => [:favourite_cities]
  end
end
