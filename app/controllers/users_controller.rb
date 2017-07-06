class UsersController < ApplicationController

  def new
    @user = User.create(email: params[:email])
    render json: @user
  end


  def show
    @user = User.find(params[:id])
    render json: @user
  end
end
