class Api::SessionsController < ApplicationController

  def new
  end
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:user_password])
      session[:user_id] = user.id
    end
    
  end
  def destroy
    session[:user_id] = nil
  end
  
end
