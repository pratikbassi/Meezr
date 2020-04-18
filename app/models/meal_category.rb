class MealCategory < ApplicationRecord
  belongs_to :meals
  has_one :category
end
