class Course < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews


    validates :name, :location, :img_url, presence: true

end
