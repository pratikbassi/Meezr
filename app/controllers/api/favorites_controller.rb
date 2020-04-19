class Api::FavoritesController < ApplicationController
  def index
    render json: Favorite.includes([:user, :meals]).limit(10), include: [:user => {:only => :user_name}]
  end

  def show
    render json: Favorite.includes([:user, :meals]).find(params[:id]), include: [:user => {:only => :user_name}, meals]
  end

  def create
    if Favorite.create(favorited: @meal, user: current_user)
      redirect_to @meal, notice: 'Project has been favorited'
    else
      redirect_to @meal, alert: 'Something went wrong...*sad panda*'
    end

  end

  def destroy
    Favorite.where(favorited_id: @project.id, user_id: current_user.id).first.destroy
    redirect_to @project, notice: 'Project is no longer in favorites'
    #Favorite.find(params[:id]).destroy
  end

  def update
  end

  private
  
  def set_project
    @meal = Meal.find(params[:project_id] || params[:id])
  end
end
