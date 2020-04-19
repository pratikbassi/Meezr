class CreateMealIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_ingredients do |t|
      t.references :meal, foreign_key: true
      t.string :product 
      t.string :nut_info
      t.integer :serving_size
      t.timestamps

    end
  end
end
