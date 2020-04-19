class CreateMealCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_categories do |t|
      t.references :meal, foreign_key: true
      t.string :category
      t.timestamps
    end
  end
end
