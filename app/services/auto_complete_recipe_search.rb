require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load


class AutoCompleteRecipeSearch

  attr_accessor :query, :number

  def initialize(query, number)
    self.query = query
    self.number = number
  end

  def get_ingredient_info
    connection = Faraday.new(
      url: 'https://api.spoonacular.com/recipessssssss/',
      params: {apiKey: ENV['API_KEY']},
    ) do |c|
      c.use Faraday::Response::RaiseError
    end

    response = connection.get('autocomplete') do |request|
      request.params['query'] = self.query
      request.params['number'] = self.number
    end
  
    data = JSON.parse(response.body)
  end
end

autocomplete_info = AutoCompleteRecipeSearch.new('bro', 11)
pp autocomplete_info.get_ingredient_info
