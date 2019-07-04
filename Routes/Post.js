const express = require('express')
const PostRoute = express.Router()
const {
	Post,
	User,
	Category,
	Comment,
	Bookmark
} = require('../database/models')

PostRoute.get('/', async (req, res) => {
	try {
		const posts = await Post.findAll({
			include: [User, Category]
		})
		res.send(posts)
	} catch (error) {
		throw error
	}
})

PostRoute.get('/user/', async (req, res) => {
	try {
		const post = await Post.findAll({
			include: [
				{
					model: User
				}
			]
		})
		res.send(post)
	} catch (error) {
		throw error
	}
})

PostRoute.get('/category/:category_id', async (req, res) => {
	try {
		const categoryId = req.params.category_id
		const find = await Post.findAll({
			include: [{ model: User }],
			where: {
				category_id: categoryId
			}
		})
		await Category.findByPk(categoryId)
		res.send(find)
	} catch (error) {
		throw error
	}
})

PostRoute.get('/:id/user', async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id, {
			include: [User]
		})
		res.json({ post })
	} catch (error) {
		throw error
	}
})

PostRoute.get('/users/:user_id', async (req, res) => {
	try {
		const userId = req.params.user_id
		const getPost = await Post.findAll({
			where: {
				user_id: userId
			}
		})
		res.send(getPost)
	} catch (error) {}
})

PostRoute.get('/:id/comments', async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id, {
			include: [User],
			include: [
				{
					model: Comment,
					include: [User]
				}
			]
		})
		res.send(post)
	} catch (error) {
		throw error
	}
})

PostRoute.post(
	'/create/user/:user_id/category/:category_id',
	async (req, res) => {
		try {
			const userId = req.params.user_id

			const categoryId = req.params.category_id
			const create = await Post.create(req.body, {
				where: {
					user_id: userId,
					category_id: categoryId
				}
			})
			const user = await User.findByPk(userId)
			const category = await Category.findByPk(categoryId)
			await create.setUser(user)
			await create.setCategory(category)
			res.send(create)
		} catch (error) {
			throw error
		}
	}
)

PostRoute.get('/:id/likes', async (req, res) => {
	try {
		const likes = await Post.findByPk(req.params.id)
		res.send(likes)
	} catch (error) {
		throw error
	}
})

PostRoute.put('/:id', async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id)
		if (post) {
			await post.update(req.body)
		}
		res.send(post)
	} catch (error) {
		throw error
	}
})

PostRoute.put('/:id/likes', async (req, res) => {
	try {
		const update = await Post.update(req.body, { where: { id: req.params.id } })
		res.send(update)
	} catch (error) {
		throw error
	}
})

PostRoute.delete('/delete/:id', async (req, res) => {
	try {
		const remove = await Post.destroy({
			where: {
				id: req.params.id
			}
		})
		res.send({ msg: `Post ${req.params.id} was removed.` })
	} catch (error) {
		throw error
	}
})

module.exports = PostRoute
