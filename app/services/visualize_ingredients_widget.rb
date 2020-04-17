require 'faraday'
require 'json'
require 'dotenv'
require "uri"
require "net/http"
Dotenv.load

#Displays the images of the ingredients used in a recipe.
class IngredientWidget

  attr_accessor :id, :defaultCss

  def initialize(id)
    self.id = id
    self.defaultCss = true
  end

  def get_nutrition_widget
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
  end
end

# ingredient_images = IngredientWidget.new('1082038')
# ingredient_images.get_nutrition_widget
