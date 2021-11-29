require 'rails_helper'

RSpec.describe "Sesisions", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/sesision/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/sesision/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
