class Api::FavoritesController < ApplicationController
  def index
    render json: Favorite.includes([:user, :meal]).limit(1000), include: [:user => {:only => :user_name}]
  end

  def show
    render json: Favorite.includes([:user, :meal])
    .find(params[:id]), include: [:user => {:only => :user_name} ]
  end

  def create
    # if Favorite.create(favorited: @meal, user: '900')
    #   redirect_to @meal, notice: 'Project has been favorited'
    # else
    #   redirect_to @meal, alert: 'Something went wrong...*sad panda*'
    # end
    favorite = Favorite.create(id: 999, meal: @meal)
    render :json => { message: "Hit Create Entry" }
  end

  def destroy
    # Favorite.where(favorited_id: @meal.id, user_id: current_user.id).first.destroy
    # redirect_to @meal, notice: 'Project is no longer in favorites'
    Favorite.find(params[:id]).destroy
    render :json => { message: "Deleted Entry" }
  end

  def update
  end

  private
  
  def set_project
    @meal = Meal.find(params[:meal] || params[:id])
  end
end
