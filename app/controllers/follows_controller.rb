class FollowsController < ApplicationController

    # for adding followers, we will send up a user_id from the card of the user that the session user wishes to follow,
    # and then shovel it in like so: user_id.followers << session_user
    def create
        user = User.find(session[:user_id])
        followee = User.find_by(username: params[:username])
        if followee && user
            followee.followers << user
            render json: followee.followers, status: :created
        else 
            render json: { error: "User not found" }, status: :not_found
        end
    end

end
