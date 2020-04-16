require 'faraday'
require 'json'
require 'dotenv'
Dotenv.load

# Searches for meal/recipe by id and then return the diets/tags from the body

class GetTags

  attr_accessor :id, :include_nutrtion, :tags_obj

  def initialize(id)
    self.id = id
    self.include_nutrtion = false
    self.tags_obj = {}
  end

  def get_tags
    connection = Faraday.new(
      url: 'https://api.spoonacular.com/recipes',
      params: {apiKey: ENV['API_KEY']},
    )

    response = connection.get(self.id+'/information') do |request|
      request.params['includeNutrition'] = self.include_nutrtion
    end

    return nil if response.status != 200
  
    # pp data = JSON.parse(response.body)
    
    if(data["vegetarian"])
      tags_obj[:vegetarian] = "Vegetarian"
    end
    if(data["vegan"])
      tags_obj[:vegan] = "Vegan"
    end
    if (data["glutenFree"])
      tags_obj[:glutenFree] = "Gluten Free"
    end
    if(data["dairyFree"])
      tags_obj[:dairyFree] = "Dairy Free"
    end
    if(data["whole30"])
      tags_obj[:whole30] = "Whole 30"
    end
    if(data["ketogenic"])
      tags_obj[:ketogenic] = "Ketogenic"
    end

    #object/hash contain all of the tags that returned true. 
    tags_obj
  end
end

# tags = GetTags.new('1003464') #1003464, 716429
# pp tags.get_tags

