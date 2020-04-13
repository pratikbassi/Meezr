class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :product 
      t.string :nut_info
      t.timestamps
    end
  end
end
