class User < ApplicationRecord
  has_many :meals
  has_many :favorites

  validates :user_name, presence: true
  validates :user_password, presence: true
  validates :email, presence: true
end
