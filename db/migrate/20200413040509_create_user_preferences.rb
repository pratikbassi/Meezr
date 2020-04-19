class CreateUserPreferences < ActiveRecord::Migration[5.2]
  def change
    create_table :user_preferences do |t|
      t.references :user, foreign_key: true
      t.references :meal_ingredient, foreign_key: true
      t.boolean :is_disliked, :default => false
      t.timestamps
    end
  end
end
