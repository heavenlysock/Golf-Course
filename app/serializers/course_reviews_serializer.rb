class CourseReviewsSerializer < ActiveModel::Serializer
    attributes :id, :name, :location, :par, :length, :holes, :price, :img_url 

    has_many :reviews

    def total_reviews
        object.reviews.length
    end
    


end

