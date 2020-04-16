require 'faraday'
require 'json'
require 'dotenv'
require "uri"
Dotenv.load

class ParsedIngredientInfo

  attr_accessor :ingredientList, :servings, :includeNutrition

  def initialize(ingredientList, servings)
    @ingredientList = ingredientList
    @servings = servings
  end


  def parsed_ingredient_info
    
    data = {
      ingredientList: @ingredientList.join("\n"),
      includeNutrition: true,
      servings: @servings
    }

    connection = Faraday.new(
      url: 'https://api.spoonacular.com/recipes/',
      params: {apiKey: ENV['API_KEY']},
    )

    response = connection.post('parseIngredients') do |request|
      request.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      request.body = URI.encode_www_form(data)
    end

    return nil if response.status != 200
  
    data = JSON.parse(response.body)
   
  end
end

test = ParsedIngredientInfo.new(["3 oz pork shoulder", "banana"], 2)
pp test.parsed_ingredient_info