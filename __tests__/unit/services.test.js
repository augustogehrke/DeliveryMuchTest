const GiphyApi = require('../../src/services/giphyApi')
const RecipePuppyApi = require('../../src/services/recipePuppyApi')
require('dotenv').config()

const axios = require('axios')
axios.defaults.adapter = require('axios/lib/adapters/http')

describe('test-1', () => {
  it('API Recipe Puppy online', async () => {
    const infos = await RecipePuppyApi.getRecipes()
    expect(infos).toHaveProperty('title', 'version', 'href', 'results')
  })
})

describe('test-2', () => {
  it('API Giply online', async () => {
    const { data } = await GiphyApi.searchGif()
    expect(data).toHaveLength(1)
  })
})
