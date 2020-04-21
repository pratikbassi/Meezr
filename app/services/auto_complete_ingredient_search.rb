require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

class AutoCompleteIngredientSearch

  attr_accessor :query, :number

  def initialize(query, number)
    self.query = query
    self.number = number
  end

  def get_ingredient_info
    begin
      connection = Faraday.new(
        url: 'https://api.spoonacular.com/food/ingredients/',
        params: {apiKey: ENV['API_KEY']},
      ) 
      # do |c|
      #   c.use Faraday::Response::RaiseError
      # end
  
      response = connection.get('autocomplete') do |request|
        request.params['query'] = self.query
        request.params['number'] = self.number
        request.params['metaInformation'] = true
      end
    
      data = JSON.parse(response.body)
      
    rescue Exception => e 
      status = e.response[:status]
      response = JSON.parse(e.response[:body])
      puts "Error #{status} occurred. #{response["message"]}"
    end    
  end
end

# autocomplete_info = AutoCompleteRecipeSearch.new('bro', 11)
# pp autocomplete_info.get_ingredient_info
