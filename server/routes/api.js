const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requestPromise = require('request-promise')
const User = require('../models/User')
const Menu = require('../models/Menu')
const Meal = require('../models/Meal')
const Food = require('../models/Food')
const apiKey = '2aa1e21b20e91d5ab15239f17a36611b'
const apiId = 'd1a21d2f'

router.get('/food/:foodName', async (req, res) => {
    ```Request food items from External API

    GET https://trackapi.nutritionix.com/v2/search/instant?query=${foodName}
    
    Then POST https://trackapi.nutritionix.com/v2/natural/nutrients
    Body: { “query”: foodName }
    
    Full Routes: https://trackapi.nutritionix.com/docs/#/```
})

router.get('/menu', async (req, res) => {
    ```Get daily menu from DB, to be fetched on pageLoad()```
})

router.post('/menu', async (req, res) => {
    ```Save current daily menu to DB, to be executed by User.createMenu().
    Body: an Object similar to menu schema.
    ```
})

router.post('user/menu', async (req, res) => {
    ```Save user’s current daily menu to DB, to be executed by Menu.save().
    Body: an Object similar to menu schema.
    ```
})

router.put('/food/', async (req, res) => {
    ```Add selected food item to current menu, to be executed by Menu.addToMenu()```
})

router.delete('/consume/', async (req, res) => {
    ```Mark selected food item as consumed according to the current daily menu.
    ```
})

router.delete('/menu/', async (req, res) => {
    ```Delete user’s current menu from DB, to be executed by User.removeMenu()```
})


module.exports = router
