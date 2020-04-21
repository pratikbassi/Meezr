class Api::Ingredients::VisualizeNutritionController < ApplicationController
  def index
    # pp request.body.read
    data = JSON.parse(request.body.read)
    ingredients = VisualizeNutrition.new(data['ingredients'], 1)
    # pp ingredients
    render :html => ingredients.get_nutrition_widget.html_safe
  end
end
