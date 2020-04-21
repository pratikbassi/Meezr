class Api::Ingredients::AutocompleteController < ApplicationController
  def index
    # data = JSON.parse(request.query.read)
    p "hit autocomplete controller"
    queryParams = request.query_parameters
    pp queryParams
    search = AutoCompleteIngredientSearch.new(queryParams['query'], 10)
    render :json => search.get_ingredient_info
  end
end
