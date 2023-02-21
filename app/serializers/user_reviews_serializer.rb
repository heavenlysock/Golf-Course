class UserReviewsSerializer < ActiveModel::Serializer
    attributes :id, :name, :image

    has_many :reviews

end