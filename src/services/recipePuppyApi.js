const axios = require('axios')

class RecipePuppyApi {
  async getRecipes (ingredients) {
    try {
      const { data } = await axios.get(`${process.env.API_RECIPE_PUPPY_URL}?i=${ingredients}`)
      return data
    } catch (error) {
      throw new Error({
        message: 'The Recipe Puppy API is not currently available',
        name: 'Unavailable Service',
        status: 400
      })
    }
  }
}

module.exports = new RecipePuppyApi()
