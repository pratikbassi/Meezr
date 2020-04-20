class Api::FavoritesController < ApplicationController
  def new
  end 

  def index
    # puts session[]
    render json: Favorite.includes([:user, :meal]).limit(1000), include: [:meal, :user => {:only => :user_name}]
  end

  def show
    render json: Favorite.includes([:user, :meal])
    .find(params[:id]), include: [:user => {:only => :user_name} ]
  end

  def create
    
    userID = request.cookies["user_id"]
    pp userID
    Favorite.create(:meal_id => 84 , :user_id => userID)
  
    render :json => { message: 'Favorite has been added'}
    # else0
    #   render :json => { message: "Something went wrong"}
    # end
    # favorite = Favorite.create(id: @user, meal: @meal)
    # render :json => { message: "Hit Create Entry" }

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
