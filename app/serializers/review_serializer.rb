class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :recommendation, :pros, :cons
  has_one :user
  has_one :golf
end
