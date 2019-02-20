class CreateGeneratedJokes < ActiveRecord::Migration[5.2]
  def change
    create_table :generated_jokes do |t|
      t.string :joke
      t.integer :score

      t.timestamps
    end
  end
end
