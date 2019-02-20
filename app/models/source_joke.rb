class SourceJoke < ApplicationRecord
  validates :joke, presence: true, uniqueness: true
end
