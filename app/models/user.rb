class User < ApplicationRecord
    has_secure_password
    
    has_many :followed_users, foreign_key: :follower_id, class_name: 'Follow'
    has_many :followees, through: :followed_users
    has_many :following_users, foreign_key: :followee_id, class_name: 'Follow'
    has_many :followers, through: :following_users
    has_many :messages
    has_many :sender_conversations, foreign_key: :sender_id, class_name: 'Conversation'
    has_many :receiver_conversations, foreign_key: :recipient_id, class_name: 'Conversation'

    validates :username, uniqueness: { case_sensitive: false }
    validates :email, uniqueness: true
    
     reverse_geocoded_by :latitude, :longitude
     after_validation :reverse_geocode


    # def address
    #     [street, city, state, country].compact.join(', ')
    # end


     def address=(what)
         # [street, city, state, country].compact.join(', ')
     end



    def nearby_users
        User.near([self.latitude, self.longitude], 20)
    end

    def conversations 
        senders = self.sender_conversations
        receivers = self.receiver_conversations

        senders + receivers
    end

    def matches
       group_a = self.followees 
       group_b = self.followers
    
       group_a & group_b
     
    end

    def open_user
        # users = User.all
        users = self.nearby_users
        already_followed = self.followees
        users - already_followed
    end


end
