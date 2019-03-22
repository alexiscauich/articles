Rails.application.routes.draw do
  get 'article/index'
  devise_for :users


  root 'articles#index'


  resources :articles do
    resources :comments
  end

  get '/api' => 'welcome#index', defaults: { format: :json }


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
