class CreateMealPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_photos do |t|
      t.string :image_url
      t.references :meal, foreign_key: true
      t.timestamps
    end
  end
end
