class Service
	include Mongoid::Document
  	include Mongoid::Timestamps::Created
  	include Mongoid::Timestamps::Updated

  field :contact, type: Contact
  field :title, type: String
  field :category, type: String
  field :category_tags, type: Array
  field :location_tags, type: Array
  field :brag, type: String
  field :tell_me_more, type: String
  field :status, type: String
  @@count = Service.all.count
end
