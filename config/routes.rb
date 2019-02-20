Rails.application.routes.draw do
  scope :api do
    resources :generated_jokes, only: [:index, :create, :update]
    get '/generate_joke', to: 'generated_jokes#show'
  end
end
