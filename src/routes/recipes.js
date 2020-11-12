const express = require('express')
const routes = express.Router()
const recipesController = require('../controllers/recipes')
const { check, validationResult } = require('express-validator')

routes.get('/', [
  check('i').custom(i => {
    const ingredients = i.split(',')
    if (ingredients.length > 3) {
      throw new Error('Permitido no máximo 3 ingredientes')
    }
  })
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const data = await recipesController.getRecipes(req.query.i)
    res.json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = routes
