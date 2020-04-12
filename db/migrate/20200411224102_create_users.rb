class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :email 
      t.string :user_password 
      t.integer :bmi

    end
  end
end
