class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end

    def show
        render json: User.find(params[:id]), status: :ok
    end

    def destroy
        User.find(params[:id]).destroy
        head :no_content
    end

    def create
        User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:name, :email, :password)
    end
end


























# class UsersController < ApplicationController
#     before_action :find_user, only: [:show]
#     skip_before_action :authorize, only: [:index, :create]


#     def index
#         render json: User.all, status: :ok
#     end


#     def show
#         @user = find_user
#         render json: user
#     end

#     def create
#         user = User.create!(user_params)
#         session[:user_id] = user.ID
#         render json: user, status: :created
#     end

#     private

#     def find_user
#         user = User.find(params[:id])
#     end

#     def user_params
#         params.permit(:firstname, :lastname, :email, :password, :password_confirmation)
#     end



# end




class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end

    def show
        render json: User.find(params[:id]), status: :ok
    end

    def destroy
        User.find(params[:id]).destroy
        head :no_content
    end

    def create
        User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:name, :email, :password)
    end
end
