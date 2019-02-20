class GeneratedJoke < ApplicationRecord
  after_initialize :default_values
  validates :joke, presence: true, uniqueness: true

  private

  def default_values
    self.score ||= 0
  end
end
