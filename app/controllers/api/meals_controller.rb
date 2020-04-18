class Api::MealsController < ApplicationController
  def index
    render json: Meal.includes([:meal_photos, :meal_ingredients, :meal_categories, :user]).where({is_deleted: false, is_public: true}).limit(10), include: [:meal_photos, :meal_ingredients, :meal_categories, :user => {:only => :user_name}]
  end

  def show
    render :json => Meal.includes([:meal_photos, :meal_ingredients, :meal_categories, :user]).find(params[:id]), include: [:meal_photos, :meal_ingredients, :meal_categories => {:only => :category_id}, :user => {:only => :user_name}]
  end

  private

  def meal
    Meal.includes([:meal_photos, :meal_ingredients, :meal_categories, :user])
  end

end
