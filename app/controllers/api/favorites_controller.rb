class Api::FavoritesController < ApplicationController
  def new
    @user = request.cookies["user_id"]
    
  end 

  def index
    render json: Favorite.includes([:user, :meal]).limit(1000), include: [:meal, :user => {:only => :user_name}]
  end

  def show
    render json: Favorite.includes([:user, :meal])
    .find(params[:id]), include: [:user => {:only => :user_name} ]
  end

  def create
    Favorite.create(:id => 100, :meal_id => 666 , :user_id => 100)
   
      render :json => { message: 'Favorite has been added'}
    # else
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
