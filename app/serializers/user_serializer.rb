class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :firstName, :lastName, :email, :images, :instruments, :influences, :bio, :song_url, :latitude, :longitude
  
end
