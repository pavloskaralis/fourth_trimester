Rails.application.routes.draw do
  resources :tips
  resources :articles
  post 'authenticate', to: 'authentication#authenticate'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
