class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :sender , :recipient
  has_many :messages
end
