class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :invalid
  rescue_from ActiveRecord::RecordNotFound, with: :not_found


  before_action :authorized_user

  def current_user
    @user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def authorized_user
    render json: { errors: "unauthorized"}, status: :unauthorized unless current_user
  end



    private
      def invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end

      def not_found(invalid)
        render json: {error: "#{invalid.model} not found"}, status: :not_found
      end





end
