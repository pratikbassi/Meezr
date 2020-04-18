class Meal < ApplicationRecord
  belongs_to :user
  has_many :meal_ingredients
  has_many :meal_photos
  has_many :meal_categories
end
