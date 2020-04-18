require 'faraday'
require 'json'
require 'dotenv'
require "uri"
require "net/http"
Dotenv.load

#Uses the meal id to retreive the nutrition widet. 
class PriceWidget

  attr_accessor :id, :defaultCss
  
  def initialize(id)
    self.id = id
    self.defaultCss = true
  end
  
  def get_nutrition_widget
    
    begin
      connection = Faraday.new(
        url: 'https://api.spoonacular.com/recipes/',
        params: {apiKey: ENV['API_KEY']},
        )do |c|
        c.use Faraday::Response::RaiseError
      end
      
      response = connection.get(self.id+'/ingredientWidget') do |request|
        request.params['id'] = self.id
        request.params['defaultCss'] = self.defaultCss
      end

      data = response.body
      data.delete! '\\'
      puts data
      
    rescue Exception => e 
      status = e.response[:status]
      response = JSON.parse(e.response[:body])
      puts "Error #{status} occurred. #{response["message"]}"
    end
  end
end

meal_cals = PriceWidget.new('1082038')
pp meal_cals.get_nutrition_widget