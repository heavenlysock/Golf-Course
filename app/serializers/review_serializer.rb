class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user, :course, :recommendation, :pros, :cons, :rating
end
