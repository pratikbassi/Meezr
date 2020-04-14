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
    connection = Faraday.new(
      url: 'https://api.spoonacular.com/food/ingredients/',
      params: {apiKey: ENV['API_KEY']},
    )

    response = connection.get(self.id+'/information') do |request|
      request.params['amount'] = self.portion_grams
      request.params['unit'] = 'grams'
      # req.body = {query: 'butter'}.to_json # would be used for like parseIngredients API i think
    end

    return nil if response.status != 200
  
    data = JSON.parse(response.body)
    # puts JSON.pretty_generate(data)
  end
end

# pineapple_info = IngredientsInfo.new('9266', 100)
# pineapple_info.get_ingredient_info
