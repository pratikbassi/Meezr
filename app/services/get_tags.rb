require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

# Retrieves all the information an ingredient has. Parameters id is a strind, portions_grams is a number.
class GetTags

  attr_accessor :id, :include_nutrtion

  def initialize(id)
    self.id = id
    self.include_nutrtion = false
  end

  def get_tags
    connection = Faraday.new(
      url: 'https://api.spoonacular.com/recipes',
      params: {apiKey: ENV['API_KEY']},
    )

    response = connection.get(self.id+'/information') do |request|
      request.params['id'] = self.id
      request.params['includeNutrition'] = self.include_nutrtion
    end

    return nil if response.status != 200
  
    data = JSON.parse(response.body)
    data["vegetarian"]
    
  end
end

tags = GetTags.new('716429')
pp tags.get_tags

