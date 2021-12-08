class UsersController < ApplicationController
    
    def index
        user = User.find(session[:user_id])
        render json: user.open_user
    end

    def show 
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user, status: :accepted
        else
            render json: { error: user.errors }, status: :not_found 
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
    end
    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :firstName, :lastName, :email, :images, :instruments, :influences, :bio, :song_url, :longitude, :latitude)
    end
end
