const express = require('express')
const searchRouter = express.Router()
const { User, Post } = require('../database/models')

searchRouter.get('/:type_of/:search_query', async (req, res) => {
	try {
		const findUser = await User.findAll()
		const findPosts = await Post.findAll()
		const searchType = req.params.type_of
		const query = req.params.search_query.toLowerCase()
		if (searchType === 'users') {
			res.send(
				findUser.filter((user) => {
					return user.dataValues.skills.filter((skill) => {
						if (
							user.dataValues.username.toLowerCase().includes(query) ||
							skill.toLowerCase().includes(query)
						) {
							return user
						}
					})
				})
			)
		} else {
			res.send(
				findPosts.filter((post) => {
					if (post.title.toLowerCase().includes(query)) return post
				})
			)
		}
	} catch (error) {
		throw error
	}
})

module.exports = searchRouter
