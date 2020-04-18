class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.references :user, foreign_key: true
      t.boolean :is_public, :default =>  true
      t.boolean :is_deleted, :default =>  false
      t.string :title, :default => "No Title!"
      t.string :desc, :default => "No Desc!"
      t.timestamps
    end
  end
end
