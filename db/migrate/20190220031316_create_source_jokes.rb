class CreateSourceJokes < ActiveRecord::Migration[5.2]
  def change
    create_table :source_jokes do |t|
      t.string :joke

      t.timestamps
    end
  end
end
