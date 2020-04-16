require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

# Uses a string of ingredients to create a meal.
class CreateMeal
  
  attr_accessor :ingredients, :number_results, :ranking, :ignore_pantry, :data

  def initialize(ingredients)
    @ingredients = ingredients
    @number_results = 1
    @ranking = 1
    @ignore_pantry = false
    @data = create_meal()
  end

  def create_meal
    connection = Faraday.new(
      url: 'https://api.spoonacular.com/recipes/',
      params: {apiKey: ENV['API_KEY']},
    )

    response = connection.get('findByIngredients') do |request|
      request.params['ingredients'] = @ingredients
      request.params['number'] = @number_results
      request.params['ranking'] = @ranking
      request.params['ignore_pantry'] = @ignore_pantry
      # req.body = {query: 'butter'}.to_json # would be used for like parseIngredients API i think
    end

    return nil if response.status != 200
  
    JSON.parse(response.body)
    # JSON.pretty_generate(data)
  end

  def get_calories
    puts "hello"
    pp @data
  end

end

supper = CreateMeal.new('apples,flour,sugar')
# no_cal = supper.create_meal
# puts no_cal.get_calories
supper.get_calories




