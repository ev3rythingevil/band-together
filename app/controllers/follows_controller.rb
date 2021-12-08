class FollowsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        render json: user.matches
    end
    
    def create
        user = User.find_by(id: session[:user_id])
        followee = User.find_by(username: params[:username])
        if followee && user
            followee.followers << user
            # check if match is mutual
            if user.followers.include?(followee)
            # create conversation
                @conversation = Conversation.get(session[:user_id], params[:id])
            end
            render json: user, status: :created
        else 
            render json: { error: "User not found" }, status: :not_found
        end
    end

    

end
