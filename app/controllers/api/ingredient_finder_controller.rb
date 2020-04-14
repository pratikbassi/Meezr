require Rails.root.join('app', 'services', 'get_ingredient_info.rb')

class Api::IngredientFinderController < ApplicationController
  def index
    @pineapple = IngredientsInfo.new('9266', 100)
    render json: @pineapple.get_ingredient_info
  end
end
