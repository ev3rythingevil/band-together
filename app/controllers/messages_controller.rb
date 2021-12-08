class MessagesController < ApplicationController

    def create
        message = Message.create(message_params)
        if message.valid?
            render json: message, status: :created
        else
            render json: { error: message.error }, status: :not_acceptable
        end
    end

    private
    def message_params
        params.permit(:body, :user_id, :conversation_id)
    end
end
