const express = require('express')
const followersPostRouter = express.Router()
const { User, Follower, Post } = require('../database/models')

followersPostRouter.get('/posts/user/:id/', async (req, res) => {
	try {
		const users = await User.findByPk(req.params.id, {
			include: [
				{
					model: Follower,
					as: 'followers',
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
				}
			]
		})
		res.send(users)
	} catch (error) {
		throw error
	}
})

module.exports = followersPostRouter
