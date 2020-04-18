class Api::UsersController < ApplicationController
  def create  
    newUser = User.new( 
      user_name: params['user_name'],
      email: params['email'],
      user_password: params['user_password']

    )

    newUser.save
  end

  def show id 
    login = User.find(id)
    return login
  end


end
