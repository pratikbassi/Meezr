require 'json'
class Api::MealsController < ApplicationController
  def index
    render json: Meal.includes([:meal_photos, :meal_ingredients, :meal_categories, :user]).where({is_deleted: false, is_public: true}).limit(10), include: [:meal_photos, :meal_ingredients, :meal_categories, :user => {:only => :user_name}]
  end

  def show
    render :json => Meal.includes([:meal_photos, :meal_ingredients, :meal_categories, :user]).find(params[:id]), include: [:meal_photos, :meal_ingredients, :meal_categories => {:only => :category_id}, :user => {:only => :user_name}]
  end

  def create
    data = JSON.parse(request.body.read)
    p data.class
    pp data
    # pp request.raw_post
    render :json => { message: "Hit Create Entry" }
  end

  def destroy
    Meal.find(params[:id]).update(is_deleted: true)
    render :json => { message: "Deleted Entry" }
  end

  def update
    data = JSON.parse(request.body.read)
    # newData = {title: "New Title", desc: "New Description"}
    Meal.find(params[:id]).update(data)
    render :json => { message: "Updated Entry" }
  end

  # private

  # def meal
  #   Meal.includes([:meal_photos, :meal_ingredients, :meal_categories, :user])
  # end

end
