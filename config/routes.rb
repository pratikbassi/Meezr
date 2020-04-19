Rails.application.routes.draw do

  # namespace :api do
  #   get 'favorites/index'
  #   get 'favorites/show'
  #   get 'favorites/create'
  #   get 'favorites/destroy'
  #   get 'favorites/update'

  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do # /api/data
    
    get 'ingredient_finder/index', to: 'ingredient_finder#index'
    get '/data', to: 'tests#index'
    get    '/login' ,to: 'sessions#new'
    get '/logout'  ,to: 'sessions#destroy'
    
    resources :favorites
    resources :dogs
    resources :users
    resources :meals

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
