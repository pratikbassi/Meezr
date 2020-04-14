require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

# Uses a string of ingredients to create a meal.
class CreateMeal

  attr_accessor :ingredients, :number_results, :ranking, :ignore_pantry

  def initialize(ingredients)
    self.ingredients = ingredients
    self.number_results = 1
    self.ranking = 2
    self.ignore_pantry = false
  end

  def create_meal
    connection = Faraday.new(
      url: 'https://api.spoonacular.com/recipes/',
      params: {apiKey: ENV['API_KEY']},
    )

    response = connection.get('findByIngredients') do |request|
      request.params['ingredients'] = self.ingredients
      request.params['number'] = self.number_results
      request.params['ranking'] = self.ranking
      request.params['ignore_pantry'] = self.ignore_pantry
      # req.body = {query: 'butter'}.to_json # would be used for like parseIngredients API i think
    end

    return nil if response.status != 200
  
    data = JSON.parse(response.body)
    JSON.pretty_generate(data)
  end
end

supper = CreateMeal.new('apples,flour,sugar')
puts supper.create_meal
