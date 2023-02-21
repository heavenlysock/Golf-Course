class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :par, :length, :holes, :price, :img_url
end
