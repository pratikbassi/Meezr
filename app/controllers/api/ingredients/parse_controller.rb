class Api::Ingredients::ParseController < ApplicationController
  def index
    puts "hit parse index"
    pp request.body.read
    puts JSON.parse(request.body.read)
    data = JSON.parse(request.body.read)
    # ingredients = ParsedIngredientInfo.new(data[:ingredients], data[:servings])
    puts "trying ingredientList"
    # pp ingredients.ingredientList
    # pp ingredients.parsed_ingredient_info
    # test = ParsedIngredientInfo.new(["3 oz pork shoulder", "banana"], "servingsjunk")
    # pp test.parsed_ingredient_info
    test = ParsedIngredientInfo.new(["3 oz pork shoulder", "banana"], 2)
    pp test.parsed_ingredient_info
  end
end
