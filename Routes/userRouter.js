const express = require('express')
const userRouter = express.Router()
const bcrypt = require('bcrypt')
const { User } = require('../database/models')

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
		const users = await User.findByPk(req.params.id)
		res.send(users)
	} catch (error) {}
})

userRouter.get('/verify/:username', async (req, res) => {
	try {
		const users = await User.findAll()
		for (let i = 0; i < users.length; i++) {
			let currentUsers = users[i].username.toLowerCase()
			let newUser = req.params.username.toLowerCase()
			try {
				if (!currentUsers.includes(newUser)) {
					res.status(200).send({ msg: 'Username available' })
				} else {
					return next(error)
				}
			} catch (error) {
				res.status(400).send({ err: 'Username unavailable' })
			}
		}
	} catch (error) {}
})

userRouter.get('/skills', async (req, res) => {
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
