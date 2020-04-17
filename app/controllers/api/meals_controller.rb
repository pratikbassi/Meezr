class Api::MealsController < ApplicationController
  def index
    render json: Meal.includes([:meal_photos, :meal_ingredients]).limit(10), include: [:meal_photos, :meal_ingredients]
  end

  def show
    render :json => Meal.includes([:meal_photos, :meal_ingredients]).find(params[:id]), include: [:meal_photos, :meal_ingredients]
  end

end
