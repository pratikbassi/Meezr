require 'test_helper'

class IngredientFinderControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ingredient_finder_index_url
    assert_response :success
  end

end
