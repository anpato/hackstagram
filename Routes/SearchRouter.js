const express = require('express')
const searchRouter = express.Router()
const { User, Post } = require('../database/models')

searchRouter.post('/:search_query', async (req, res) => {
	try {
		const users = []
		const findUser = await User.findAll()
		const findPosts = await Post.findAll()
		const query = req.params.search_query.toLowerCase()
		if (findUser) {
			for (let i = 0; i < findUser.length; i++) {
				for (let j = 0; j < findUser[i].dataValues.skills.length; j++) {
					if (findUser[i].dataValues.skills[j].toLowerCase() === query) {
						users.push(findUser[i])
					}
				}
			}
			const filteredUsernames = findUser.filter((user) =>
				user.dataValues.username.includes(query)
			)
			res.send({ users, filteredUsernames })
		}
	} catch (error) {
		throw error
	}
})

module.exports = searchRouter
