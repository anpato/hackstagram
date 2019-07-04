const express = require('express')
const UserRoute = express.Router()
const bcrypt = require('bcrypt')
const { User, Post, Bookmark } = require('../database/models')

UserRoute.get('/', async (req, res) => {
	try {
		const users = await User.findAll()
		res.send(users)
	} catch (error) {
		throw error
	}
})

UserRoute.get('/:id', async (req, res) => {
	try {
		const users = await User.findByPk(req.params.id)
		res.send(users)
	} catch (error) {}
})

UserRoute.get('/:id/posts', async (req, res) => {
	try {
		const userPosts = await User.findAll({
			include: [{ model: Post }],
			include: [Bookmark],
			where: { id: req.params.id }
		})
		res.send(userPosts)
	} catch (error) {
		throw error
	}
})

UserRoute.get('/users/name/:username', async (req, res) => {
	try {
		const users = await User.findAll({
			where: {
				username: req.params.username
			}
		})
		res.send(users)
	} catch (error) {
		throw error
	}
})

UserRoute.get('/skills', async (req, res) => {
	try {
		const findUser = await User.findAll()
		let userArr = []
		if (findUser) {
			for (let i = 0; i < findUser.length; i++) {
				if (findUser[i].skills.includes(req.body.skills)) {
					arr.push(findUser[i])
				}
			}
		}
		console.log(userArr)
		res.send(userArr)
	} catch (error) {
		throw error
	}
})

UserRoute.get('/:id/suggested', async (req, res) => {
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

UserRoute.post('/login', async (req, res, next) => {
	passport.authenticate('login', async (err, user, info) => {
		try {
			if (err || !user) {
				const error = new Error('Error occured')
				return next(error)
			}
			req.login(
				user,
				{
					session: false
				},
				async (error) => {
					if (error) {
						return next(error)
					}
					const { username, id } = user
					const payload = { username, id }
					const token = signToken(payload)
					// return user
					return res.json({ user, token })
				}
			)
		} catch (error) {
			return next(error)
		}
	})(req, res, next)
})

UserRoute.post('/signup', async (req, res, next) => {
	passport.authenticate('signup', async (err, user, info) => {
		try {
			if (!user || err) {
				let err = new Error('*** cannot create account***')
				err.status = 400
				return next(err)
			}
			return res.json({ msg: 'User Created', user: user })
		} catch (error) {
			res.send()
			return next(error)
		}
	})(req, res, next)
})

UserRoute.put('/update/:id', async (req, res) => {
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

module.exports = UserRoute
