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
		let data
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
								},
								{
									model: PostLike
								}
							]
						}
					]
				}
			]
		})

		// for (let i = 0; i < followers.length; i++) {
		// 	const posts = await Post.findAll({
		// 		where: {
		// 			userId: followers[i].follower_id
		// 		},
		// 		include: [
		// 			{
		// 				model: User,
		// 				attributes: ['username']
		// 			},
		// 			{
		// 				model: Comment
		// 			},
		// 			{
		// 				model: PostLike
		// 			}
		// 		]
		// 	})
		// 	data = posts
		// }
		res.send(followers)
	} catch (error) {
		throw error
	}
})

module.exports = followersPostRouter
