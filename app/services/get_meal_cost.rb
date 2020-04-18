require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

#Uses the meal id to retreive the calories for that meal. 
class GetMealCost

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
  
      response = connection.get(self.id+'/priceBreakdownWidget.json') do |request|
        request.params['id'] = self.id
      end
    
      data = JSON.parse(response.body)
      data["totalCost"]

    rescue Exception => e 
      status = e.response[:status]
      response = JSON.parse(e.response[:body])
      puts "Error #{status} occurred. #{response["message"]}"
    end
  end
end

# meal_cost = GetMealCost.new('1003464')
# pp meal_cost.get_meal_calories
    
