class Ingredient < ApplicationRecord
  serialize :nut_info, JSON
end
