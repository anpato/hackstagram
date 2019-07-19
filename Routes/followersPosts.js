const express = require('express')
const followersPostRouter = express.Router()
const {
	User,
	Follower,
	Post,
	Comment,
	PostLike
} = require('../database/models')

followersPostRouter.get('/posts/:user_id', async (req, res) => {
	try {
		const followers = await Follower.findAll({
			where: {
				user_id: req.params.user_id
			},
			include: [
				{
					model: User,
					as: 'user',
					attributes: ['username'],
					include: [
						{
							model: Post,
							include: [
								{
									model: Comment
								}
							]
						}
					]
				}
			]
		})
		res.send(followers)
	} catch (error) {
		throw error
	}
})

followersPostRouter.get('/:user_id', async (req, res) => {
	try {
		const following = await Follower.findAndCountAll({
			where: {
				userId: req.params.user_id
			}
		})

		const followers = await Follower.findAndCountAll({
			where: {
				follower_id: req.params.user_id
			}
		})
		let data = {
			following: following.count,
			followers: followers.count
		}
		res.send(data)
	} catch (error) {
		throw error
	}
})

followersPostRouter.delete(
	'/:user_id/unfollow/:follower_id',
	async (req, res) => {
		try {
			const removeFollower = await Follower.destroy({
				where: {
					userId: req.params.user_id,
					follower_id: req.params.follower_id
				}
			})
			if (removeFollower) {
				const getFollowers = await Follower.findAll({
					where: {
						userId: req.params.user_id
					}
				})
				res.send(getFollowers)
			}
		} catch (error) {
			throw error
		}
	}
)

module.exports = followersPostRouter
