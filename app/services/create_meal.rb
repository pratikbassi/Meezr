require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

# Uses a string of ingredients to create a meal.
class CreateMeal
  
  attr_accessor :ingredients, :number_results, :ranking, :ignore_pantry, :data

  def initialize(ingredients)
    @ingredients = ingredients
    @number_results = 5
    @ranking = 1
    @ignore_pantry = false
    @data = create_meal()
  end

  def create_meal
  
    begin 
      connection = Faraday.new(
        url: 'https://api.spoonacular.com/recipes/',
        params: {apiKey: ENV['API_KEY']},
      )do |c|
        c.use Faraday::Response::RaiseError
      end
  
      response = connection.get('findByIngredients') do |request|
        request.params['ingredients'] = @ingredients
        request.params['number'] = @number_results
        request.params['ranking'] = @ranking
        request.params['ignore_pantry'] = @ignore_pantry
      end
    
    JSON.parse(response.body)

    rescue Exception => e 
      status = e.response[:status]
      response = JSON.parse(e.response[:body])
      puts "Error #{status} occurred. #{response["message"]}"
    end
    
  end
end

#meal = CreateMeal.new('apples,flour,sugar')





