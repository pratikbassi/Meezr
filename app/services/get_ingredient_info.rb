require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

# Retrieves all the information an ingredient has. Parameters id is a strind, portions_grams is a number.
class IngredientsInfo

  attr_accessor :id, :portion_grams

  def initialize(id, portion_grams)
    self.id = id
    self.portion_grams = portion_grams
  end

  def get_ingredient_info

    begin
      connection = Faraday.new(
        url: 'https://api.spoonacular.com/food/ingredients/',
        params: {apiKey: ENV['API_KEY']},
      )do |c|
      c.use Faraday::Response::RaiseError
    end
  
      response = connection.get(self.id+'/information') do |request|
        request.params['amount'] = self.portion_grams
        request.params['unit'] = 'grams'
      end
    
      data = JSON.parse(response.body)

    rescue Exception => e 
      status = e.response[:status]
      response = JSON.parse(e.response[:body])
      puts "Error #{status} occurred. #{response["message"]}"
    end
  end
end

pineapple_info = IngredientsInfo.new('9266', 100)
pp pineapple_info.get_ingredient_info
