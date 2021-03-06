Rails.application.routes.draw do
  

  resources :users
  resources :follows, only: [:create, :index]
  resources :conversations, only: [:index]
  resources :messages, only: [:create]

  #auth routes
  post "/signup", to: "users#create"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  get '/me', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
