class Api::UsersController < ApplicationController
  def create params 
    User.create(
      :user_name => params.user_name,
      :email => params.email,
      :user_password => params.user_password
    )
    return 201
  end

  def show
    login = User.find(10)
    return login
  end


end
