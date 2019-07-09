const express = require('express')
const createAccountRouter = express.Router()
const { User } = require('../database/models')

createAccountRouter.get('/username', async (req, res, next) => {
	try {
		const users = await User.findAll()
		const usernames = []
		if (users) {
			for (let i = 0; i < users.length; i++) {
				usernames.push(users[i].username.toLowerCase())
			}
		}
		res.send(usernames)
	} catch (error) {
		throw error
	}
})

createAccountRouter.get('/email', async (req, res, next) => {
	try {
		const users = await User.findAll()
		const emails = []
		if (users) {
			for (let i = 0; i < users.length; i++) {
				emails.push(users[i].email.toLowerCase())
			}
		}
		res.send(emails)
	} catch (error) {
		throw error
	}
})

module.exports = createAccountRouter
