const express = require('express')
const followersPostRouter = express.Router()
const { User, Follower, Post } = require('../database/models')

followersPostRouter.get('/posts/:user_id', async (req, res) => {
	try {
		const users = await Follower.findAll({
			where: {
				user_id: req.params.user_id
			},
			include: [
				{
					model: User,
					as: 'user',
					include: [
						{
							model: Post
						}
					]
				}
			]
		})
		res.send(users)
	} catch (error) {
		throw error
	}
})

module.exports = followersPostRouter
