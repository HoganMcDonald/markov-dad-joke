class GeneratedJokesController < ApplicationController
  before_action :set_generated_joke, only: [:update]

  def index
    @generated_jokes = GeneratedJoke.all

    render json: @generated_jokes
  end

  def show
    model = MarkovChain.new SourceJoke.all
    @generated_joke = model.generate_joke
    render json: { joke: @generated_joke}
  end

  def create
    # if this joke has already been generated, increment the score
    if @generated_joke = GeneratedJoke.find_by(joke: params["joke"])
      @generated_joke.increment(:score)
    else
      @generated_joke = GeneratedJoke.new(joke: params["joke"])
    end

    if @generated_joke.save
      render json: @generated_joke, status: :created
    else
      render json: @generated_joke.errors, status: :unprocessable_entity
    end
  end

  # increment score
  def update
    @generated_joke.increment!(:score)
    render json: @generated_joke
  end

  private
    def set_generated_joke
      @generated_joke = GeneratedJoke.find(params[:id])
    end

    def generated_joke_params
      params.require(:joke)
    end
end
