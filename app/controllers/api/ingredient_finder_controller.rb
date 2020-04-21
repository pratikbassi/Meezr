require Rails.root.join('app', 'services', 'get_meal_calories.rb')

class Api::GetMealCaloriesController < ApplicationController
  def index
    @meal = GetMealCalories.new('1003464')
    render json: @meal.get_meal_calories
  end
end
