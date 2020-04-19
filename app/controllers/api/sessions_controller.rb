class Api::SessionsController < ApplicationController

  def new
  end
  def create
    user = User.find_by_email(params[:email])

    if user && user['user_password'] == params[:user_password]
      render :json => { user_id: user['id'] }
    else
      render :json => { message: "403 Forbidden"}, :status => 403
    end
    
  end
  def destroy
    render :json => {user_id: nil}
  end
  
end
