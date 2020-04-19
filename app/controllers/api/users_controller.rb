class Api::UsersController < ApplicationController
  def create  
    newUser = User.new( 
      user_name: params['user_name'],
      email: params['email'],
      user_password: params['user_password']

    )

    newUser.save

    returnid = User.find_by_email(params[:email])
    render :json => { user_id: returnid['id'] } 

  end

  def show
    login = User.find(params['id'])
    return login
  end


end
