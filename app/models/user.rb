class User < ApplicationRecord
    has_many :reviews
    has_many :golf_courses, through: :reviews
end
