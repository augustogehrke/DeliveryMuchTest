const express = require('express')
const routes = express.Router()
const recipesController = require('../controllers/recipes')

routes.get('/', async (req, res) => {
  try {
    const data = await recipesController.getRecipes(req.query.i)
    res.json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = routes
