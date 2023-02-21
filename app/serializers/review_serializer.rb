class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user, :course, :recommendation, :pros, :cons, :rating

  has_one :user
  has_one :course
end
