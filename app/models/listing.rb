class Listing
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  include Mongoid::Timestamps::Updated

  field :listing_type
  field :name
  field :company_name
  field :street
  field :city
  field :state
  field :zip
  field :phone
  field :email
  field :url
  field :primary_description
  field :alternative_description
  field :primary_location
  field :alternative_location
  field :brag
  field :tell_me_more
  field :status
end