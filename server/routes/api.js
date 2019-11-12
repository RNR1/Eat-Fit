const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requestPromise = require('request-promise')
const moment = require('moment')
const User = require('../models/User').User
const Menu = require('../models/Menu').Menu
const Meal = require('../models/Meal').Meal
const Food = require('../models/Food').Food
const apiKey = '2aa1e21b20e91d5ab15239f17a36611b'
const apiId = 'd1a21d2f'

router.get('/food/:foodName', async (req, res) => {
	// Request food items from External API

	let foodName = req.params.foodName
	const getItems = {
		uri: `https://trackapi.nutritionix.com/v2/search/instant?query=${foodName}`,
		headers: {
			'x-app-key': apiKey,
			'x-app-id': apiId
		},
		json: true // Automatically parses the JSON string in the response
	}

	let items = await requestPromise(getItems)

	const getNutrients = {
		method: 'POST',
		uri: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
		headers: {
			'x-app-key': apiKey,
			'x-app-id': apiId
		},
		body: {
			query: items.common[0]['food_name']
		},
		json: true // Automatically parses the JSON string in the response
	}

	items = await requestPromise(getNutrients)
	items = items.foods[0]
	let food = new Food({
		name: items.food_name,
		servingUnit: `${items.serving_qty} ${items.serving_unit}`,
		cal: items.nf_calories,
		fat: items.nf_total_fat,
		prot: items.nf_protein,
		sugars: items.nf_sugars,
		img: items.photo.thumb,
		consumed: false
	})

	res.send(food)
})

router.get('/menu', async (req, res) => {
	// Get daily menu from DB, to be fetched on pageLoad()
	let today = moment().format('dddd')

	res.send(today)
})

router.post('/menu', async (req, res) => {
	// Save current daily menu to DB, to be executed by Menu.save().
    // Body: an Object similar to menu schema.
	let menu = req.body
	menu = new Menu({...req.body})

	await menu.save()
	res.send(menu)
})

router.post('user/menu', async (req, res) => {
	;```Save user’s current daily menu to DB, to be executed by User.createMenu().
    Body: an Object similar to menu schema.
    ```
})

router.put('/food/', async (req, res) => {
	;```Add selected food item to current menu, to be executed by Menu.addToMenu()```
})

router.put('/consume/', async (req, res) => {
	;```Mark selected food item as consumed according to the current daily menu.
    ```
})

router.delete('/menu/', async (req, res) => {
	;```Delete user’s current menu from DB, to be executed by User.removeMenu()```
})

module.exports = router
