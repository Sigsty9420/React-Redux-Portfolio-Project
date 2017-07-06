Rails.application.routes.draw do

  get 'users/:username', to: 'users#find_or_create'
  post 'users/:username', to: 'users#add_city'
  resources :favourite_cities
  resources :cities



end
