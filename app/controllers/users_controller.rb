class UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users
    end

    def show 
        user = User.find_by(id: params[:id])
        if user
        render json: user, status: :ok
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else 
            render json: { errors: user.errors }, status: :unauthorized
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
        params.permit(:username, :password, :firstName, :lastName, :email, :images, :instruments, :influences, :bio)
    end
end
