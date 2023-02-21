class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :location
      t.integer :par
      t.string :length
      t.integer :holes
      t.string :price
      t.string :img_url

      t.timestamps
    end
  end
end
