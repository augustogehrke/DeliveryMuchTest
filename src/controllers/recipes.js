const GiphyApi = require('../services/giphyApi')
const RecipePuppyApi = require('../services/recipePuppyApi')

class RecipeController {
  async getRecipes (ingredients) {
    const { results } = await RecipePuppyApi.getRecipes(ingredients)
    const recipes = await this.formatRecipes(results)

    const keywords = ingredients.split(',')
    return { keywords, recipes }
  }

  async formatRecipes (recipes) {
    const listRecipes = []

    for (const recipe of recipes) {
      const gif = await this.getGif(recipe.title)
      const ingredients = await this.formatIngredients(recipe.ingredients)

      listRecipes.push({
        title: recipe.title,
        ingredients,
        link: recipe.href,
        gif
      })
    }

    return listRecipes
  }

  async getGif (title) {
    const { data } = await GiphyApi.searchGif(title)
    if (Array.isArray(data) && data.length > 0) {
      return data[0].images.original.url
    }

    return null
  }

  async formatIngredients (ingredientsText) {
    const ingredientsList = ingredientsText.split(',')
    const ingredients = ingredientsList.map(ingredient => ingredient.trim())
    return ingredients.sort()
  }
}

module.exports = new RecipeController()
