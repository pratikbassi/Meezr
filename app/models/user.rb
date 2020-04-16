class User < ApplicationRecord
  has_many :meals

  validates :user_name, presence: true
  validates :user_password, presence: true
  validates :email, presence: true
end
