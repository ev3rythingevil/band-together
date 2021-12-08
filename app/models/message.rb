class Message < ApplicationRecord
  belongs_to :user
  belongs_to :conversation

  def user_name
   self.user.firstName  
  end
  
end
