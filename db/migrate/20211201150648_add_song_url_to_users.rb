class AddSongUrlToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :song_url, :string
  end
end
