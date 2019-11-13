const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const requestPromise = require("request-promise")
const moment = require("moment")
const User = require("../models/User")
const Menu = require("../models/Menu").Menu
const Meal = require("../models/Meal").Meal
const Food = require("../models/Food").Food
const api = "https://trackapi.nutritionix.com/v2"
const headers = {
	"x-app-key": "d4c3759bd88220ecc131b40113c4bee2",
	"x-app-id": "e87c50a2"
}

router.get("/food/:foodName", async (req, res) => {
	// Request food items from External API

	let foodName = req.params.foodName
	const getItems = {
		uri: `${api}/search/instant?query=${foodName}`,
		headers: headers,
		json: true
	}
	let items
	try {
		items = await requestPromise(getItems)
		if (items.common.length === 0) {
			throw new Error("food not found")
		}
	} catch (err) {
		return res.send(err)
	}

	const getNutrients = {
		method: "POST",
		uri: `${api}/natural/nutrients`,
		headers: headers,
		body: {
			query: items.common[0]["food_name"]
		},
		json: true
	}

	items = await requestPromise(getNutrients)
	items = items.foods[0]
	let food = new Food({
		name: items.food_name,
		servingUnit: `${items.serving_qty} ${items.serving_unit}`,
		cal: items.nf_calories || 0,
		fat: items.nf_total_fat || 0,
		prot: items.nf_protein || 0,
		sugars: items.nf_sugars || 0,
		img: items.photo.thumb,
		consumed: false
	})

	res.send(food)
})

router.get("/menu/:userId", async (req, res) => {
	// Get daily menu from DB, to be fetched on pageLoad()
	let today = moment().format("dddd")
	let userId = req.params.userId
	let user = await User.findById(userId)
	let dailyMenu = user.menu.find(m => m.dayInWeek === today)
	res.send(dailyMenu)
})

router.post("/menu", async (req, res) => {
	// Save current daily menu to DB, to be executed by Menu.save().
	// Body: an Object similar to menu schema.
	let menu = req.body
	menu = new Menu({ ...req.body })

	await menu.save()
	res.send(menu)
})

router.post("/user/menu", async (req, res) => {
	// Save user’s current daily menu to DB, to be executed by User.createMenu().
	// Body: an Object contains userId and menuId .

	let user = await User.findById(req.body.userId)
	let menu = await Menu.findById(req.body.menuId)
	user.menu.push(menu)
	await user.save()
	res.send(user)
})

router.put("/consume/", async (req, res) => {
	// Mark selected food item as consumed according to the current daily menu.
	let userId = req.body.userId
	let meal = req.body.meal
	let foodId = req.body.foodId
	let today = moment().format("dddd")

	let user = await User.findById(userId)
	let dailyMenu = user.menu.find(m => m.dayInWeek === today)
	let food = dailyMenu[meal].foods.find(f => f.id === foodId)
	food.consumed = !food.consumed
	await user.save()

	res.send(food)
})

router.delete("/menu/", async (req, res) => {
	// Delete user’s current menu from DB, to be executed by User.removeMenu()
	let userId = req.body.userId
	let selectedDay = req.body.selectedDay

	let user = await User.findById(userId)
	let menu = user.menu.findIndex(m => m.dayInWeek === selectedDay)
	user.menu.splice(menu, 1)
	await user.save()
	res.send(user)
})

router.post("/login", async (req, res) => {
	let userId = req.body.userId

	let user = await User.findById(userId)
	res.send(user)
})

router.post("/register", async (req, res) => {
	let user = req.body
	user = new User({ ...req.body })

	await user.save()
	res.send(user)
})

module.exports = router
