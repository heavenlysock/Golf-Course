class ApplicationController < ActionController::API
  include ActionController::Cookies


  before_action :authenticated_user

  private

  def authenticated_user
    @current_user ||= User.find_by(id: session[:user_id])
    render json: { error: "Not authorized" }, status: :unauthorized unless @current_user
  end

  def invalid(invalid)
      render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
