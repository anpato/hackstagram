const express = require('express')
const userRouter = express.Router()
const bcrypt = require('bcrypt')
const { User, Follower, Post } = require('../database/models')

userRouter.get('/', async (req, res) => {
	try {
		const users = await User.findAll()
		res.send(users)
	} catch (error) {
		throw error
	}
})

userRouter.get('/:id', async (req, res) => {
	try {
		const user = await User.findOne({
			where: {
				id: req.params.id
			},
			include: [
				{
					model: Follower,
					as: 'following',
					include: [
						{
							model: User,
							as: 'user',
							include: [
								{
									model: Follower,
									as: 'following'
								}
							]
						}
					]
				}
			]
		})
		if (user) {
			const checkFollowersLength = []
			for (let i = 0; i < user.following.length; i++) {
				const {
					dataValues: {
						user: {
							dataValues: { following }
						}
					}
				} = user.following[i]
				if (following) {
					for (let j = 0; j < following.length; j++) {
						if (following[j].follower_id === parseInt(req.params.id)) {
							checkFollowersLength.push(following[j])
						}
					}
				}
			}
			res.send({ user, checkFollowersLength })
		}
	} catch (error) {
		throw error
	}
})

userRouter.get('/:user_id/followers', async (req, res) => {
	try {
		const user = await User.findOne({
			where: {
				id: req.params.user_id
			},
			include: [
				{
					model: Follower,
					as: 'following',
					include: [
						{
							model: User,
							as: 'user',
							include: [Post]
						}
					]
				}
			]
		})
		res.send(user)
	} catch (error) {
		throw error
	}
})

userRouter.post('/:user_id/follow/:follower_id', async (req, res) => {
	try {
		const user = await User.findByPk(req.params.user_id)
		if (user) {
			if (user.id.toString() === req.params.follower_id) {
				res.status(400).json({ err: 'You cannot follow yourself' })
			} else {
				const following = await Follower.findOrCreate({
					where: {
						userId: req.params.user_id,
						follower_id: req.params.follower_id
					}
				})
				res.send(following)
			}
		}
	} catch (error) {
		throw error
	}
})
// Does this route make sense as a search route, take in a skill
userRouter.get('/search/skills', async (req, res) => {
	try {
		const findUser = await User.findAll()
		let userArr = []
		if (findUser) {
			for (let i = 0; i < findUser.length; i++) {
				for (let j = 0; j < findUser[i].skills.length; j++) {
					if (
						findUser[i].skills[j]
							.toLowerCase()
							.includes(req.body.skills.toLowerCase())
					) {
						userArr.push(findUser[i])
					}
				}
			}
		}
		res.send(userArr)
	} catch (error) {
		throw error
	}
})

userRouter.get('/:id/suggested', async (req, res) => {
	try {
		const findUser = await User.findByPk(req.params.id)
		const findUsers = await User.findAll()
		let users = []
		if (findUser) {
			for (let i = 0; i < findUser.skills.length; i++) {
				if (findUsers) {
					for (let j = 0; j < findUsers.length; j++) {
						if (
							findUsers[j].skills.includes(findUser.skills[i]) &&
							findUsers[j].id !== findUser.id
						) {
							if (!users.includes(findUsers[j])) {
								users.push(findUsers[j])
							}
						}
					}
				}
			}
		}
		res.send(users)
	} catch (error) {
		throw error
	}
})

userRouter.put('/update/:id', async (req, res) => {
	try {
		const user = await User.findByPk(req.params.id)
		await User.beforeUpdate(bcrypt.hash(req.body.password, 12))
		if (user) {
			const pass = await bcrypt.hash(req.body.password, 12)
			await User.update(
				{
					username: req.body.username,
					email: req.body.email,
					password: pass
				},
				{
					where: { id: req.params.id }
				}
			)
		}
		res.json({ user: user })
	} catch (error) {
		res.status(error.status || 400)
		res.send({ msg: error })
		throw error
	}
})

module.exports = userRouter
