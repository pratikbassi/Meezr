require 'faraday'
require 'faraday_middleware'
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

    begin
      connection = Faraday.new(
        url: 'https://api.spoonacular.com/recipes/',
        params: {apiKey: ENV['API_KEY']},
      )do |c|
      c.use Faraday::Response::RaiseError
      end

      response = connection.get(self.id+'/nutritionWidget.json') do |request|
        request.params['id'] = self.id
      end      

      data = JSON.parse(response.body)
      data["calories"].to_i

    rescue Exception => e 
      status = e.response[:status]
      response = JSON.parse(e.response[:body])
      puts "Error #{status} occurred. #{response["message"]}"
    end
  end
end

meal_cals = GetMealCalories.new('1003464')
pp meal_cals.get_meal_calories
    
