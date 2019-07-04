const express = require('express')
const CategoryRoute = express.Router()
const { Category, Post, User } = require('../database/models')

CategoryRoute.get('/', async (req, res) => {
	try {
		const categories = await Category.findAll()
		res.send(categories)
	} catch (error) {
		throw error
	}
})

CategoryRoute.get('/:id', async (req, res) => {
	try {
		const category = await Category.findByPk(req.params.id, {
			include: [Post]
		})
		res.send(category)
	} catch (error) {
		throw error
	}
})

CategoryRoute.post('/create', async (req, res) => {
	try {
		const createCategory = await Category.create(req.body)
		res.send(createCategory)
	} catch (error) {
		throw error
	}
})

module.exports = CategoryRoute
