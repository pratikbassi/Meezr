require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

#Uses the meal id to retreive the calories for that meal. 
class GetMealCalories

  attr_accessor :id  

  def initialize(id)
    self.id = id
  end

  def get_meal_calories
    connection = Faraday.new(
      url: 'https://api.spoonacular.com/recipes/',
      params: {apiKey: ENV['API_KEY']},
    )

    response = connection.get(self.id+'/nutritionWidget.json') do |request|
      request.params['id'] = self.id
    end

    return nil if response.status != 200
  
    data = JSON.parse(response.body)
    
  end
end

meal_cals = GetMealCalories.new('1003464')
pp meal_cals.get_meal_calories.inspect
