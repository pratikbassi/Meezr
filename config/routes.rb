Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do # /api/data
    
    get 'ingredient_finder/index', to: 'ingredient_finder#index'
    get '/data', to: 'tests#index'
    post  '/login' ,to: 'sessions#create'
    get '/logout'  ,to: 'sessions#destroy'
    get "search/:query" =>  "meals#search"
    resources :dogs
    resources :users
    resources :meals

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
