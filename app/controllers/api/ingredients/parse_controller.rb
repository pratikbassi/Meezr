class Api::Ingredients::ParseController < ApplicationController
  def index
    data = JSON.parse(request.body.read)
    ingredients = ParsedIngredientInfo.new(data['ingredients'], data['servings'])
    render :json => ingredients.parsed_ingredient_info
  end
end
