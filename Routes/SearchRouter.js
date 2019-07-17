const express = require('express')
const searchRouter = express.Router()
const { User, Post } = require('../database/models')

searchRouter.get('/:search_query', async (req, res) => {
	try {
		const findUser = await User.findAll()
		const findPosts = await Post.findAll()
		const searchType = req.params.type_of
		const query = req.params.search_query.toLowerCase()
		console.log(query.length)
		if (query.length > 3) {
			if (findUser || findPosts) {
				const users = findUser.filter((user) => {
					return user.dataValues.skills.filter((skill) => {
						if (
							user.dataValues.username.toLowerCase().includes(query) ||
							skill.toLowerCase().includes(query)
						) {
							return user
						}
					})
				})
				const posts = findPosts.filter((post) => {
					if (post.title.toLowerCase().includes(query)) return post
				})
				let data = {
					users: users,
					posts: posts
				}
				res.json({ users, posts })
			}
		}
	} catch (error) {
		throw error
	}
})

module.exports = searchRouter
