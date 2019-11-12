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

module.exports = router
