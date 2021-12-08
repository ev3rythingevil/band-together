class ConversationsController < ApplicationController

    def index 
      user = User.find_by(id: session[:user_id])
      convos = user.conversations

      render json: convos
    end


end
