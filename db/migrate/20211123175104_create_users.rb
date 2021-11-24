class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :images
      t.string :instruments
      t.string :influences
      t.string :bio

      t.timestamps
    end
  end
end
