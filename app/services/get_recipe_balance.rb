require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

#Uses the meal id to return the percent protein, fat and carbs of that meal. 
class GetRecipeBalance

  attr_accessor :id, :includeNutrition


  def initialize(id)
    self.id = id
    self.includeNutrition = true
  end

  def get_recipe_information
    connection = Faraday.new(
      url: 'https://api.spoonacular.com/recipes/',
      params: {apiKey: ENV['API_KEY']},
    )

    response = connection.get(self.id+'/information') do |request|
      request.params['id'] = self.id
      request.params['includeNutrition'] = self.includeNutrition
    end

    return nil if response.status != 200
  
    data = JSON.parse(response.body)
    data["nutrition"]["caloricBreakdown"]
  end
end

recipe_nutrition = GetRecipeBalance.new('716429')
pp recipe_nutrition.get_recipe_information