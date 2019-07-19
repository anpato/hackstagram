const express = require('express')
const userRouter = express.Router()
const bcrypt = require('bcrypt')
const { User, Follower, Post } = require('../database/models')
const { fakeUsers } = require('../database/fakeUsers')
const { fakePosts } = require('../database/fakePosts')
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
		const users = await User.findByPk(req.params.id, {
			include: [Post]
		})
		res.send(users)
	} catch (error) {
		throw error
	}
})

userRouter.get('/:user_id/followers', async (req, res) => {
	try {
		const userFollowers = await Follower.findAll({
			where: {
				follower_id: req.params.user_id
			}
		})

		const userFollowing = await Follower.findAll({
			where: {
				user_id: req.params.user_id
			}
		})
		res.send([userFollowers, userFollowing])
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

userRouter.post('/:user_id/follow/', async (req, res) => {
	try {
		const ids = []
		const users = await User.findAll()
		for (let i = 0; i < users.length; i++) {
			ids.push(users[i].id)
		}
		const user = await User.findByPk(req.params.user_id)
		if (user) {
			const following = await Follower.findOrCreate({
				where: {
					userId: req.params.user_id,
					follower_id: Math.floor(Math.random() * ids.length)
				}
			})
			res.send(following)
		}
	} catch (error) {
		throw error
	}
})

userRouter.post('/posts/users', async (req, res) => {
	try {
		const users = await User.findAll({ where: {} })
		for (let i = 0; i < users.length; i++) {
			for (let j = 0; j < fakePosts.length; j++) {
				const posts = await Post.create({
					title: fakePosts[j].title,
					description: fakePosts[j].description,
					image: fakePosts[j].image,
					likes: fakePosts[j].likes
				})
				await posts.setUser(users[i])
			}
		}
		res.send('created')
	} catch (error) {
		throw error
	}
})

userRouter.get('/:id/suggested', async (req, res) => {
	console.log(typeof req.params.id)
	try {
		const findUser = await User.findByPk(req.params.id, {
			include: [
				{
					model: Follower,
					as: 'following'
				}
			]
		})
		const findUsers = await User.findAll()
		let users = []
		let followerIds = []
		if (findUser) {
			for (let k = 0; k < findUser.following.length; k++) {
				if (
					!followerIds.includes(findUser.following[k].dataValues.follower_id)
				) {
					followerIds.push(findUser.following[k].dataValues.follower_id)
				}
			}

			for (let i = 0; i < findUser.skills.length; i++) {
				for (let j = 0; j < findUsers.length; j++) {
					if (
						findUsers[j].skills.includes(findUser.skills[i]) &&
						findUsers[j].id !== findUser.id &&
						!followerIds.includes(findUsers[j].id) &&
						!users.includes(findUsers[j])
					) {
						users.push(findUsers[j])
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
