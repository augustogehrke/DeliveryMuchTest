const RecipeController = require('../../src/controllers/recipes')
require('dotenv').config()

const ingredients = 'onions,garlic'
const gifTitle = 'happy'

describe('test-1', () => {
  it('function getGif return url gif', async () => {
    const gif = await RecipeController.getGif(gifTitle)
    expect(typeof gif).toBe('string')
  })
})

describe('test-2', () => {
  it('function formatIngredients return array', async () => {
    const listIngredients = await RecipeController.formatIngredients(ingredients)
    expect(Array.isArray(listIngredients)).toBe(true)
  })
})
