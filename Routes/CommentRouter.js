const express = require('express')
const CommentRoute = express.Router()
const { Post, User, Category, Comment } = require('../database/models')

CommentRoute.post('/create/post/:post_id/user/:user_id', async (req, res) => {
	try {
		const comments = await Post.findByPk(req.params.id)
		const userId = req.params.user_id
		const postId = req.params.post_id
		const create = await Comment.create(req.body, {
			where: {
				user_id: userId,
				post_id: postId
			}
		})

		const user = await User.findByPk(userId)
		const post = await Post.findByPk(postId)
		await create.setUser(user)
		await create.setPost(post)
		res.send(create)
	} catch (error) {
		throw error
	}
})

CommentRoute.put('/:id/likes', async (req, res) => {
	try {
		const update = await Comment.update(req.body, {
			where: { id: req.params.id }
		})
		res.send(update)
	} catch (error) {
		throw error
	}
})

CommentRoute.delete('/delete/:id/post/:post_id', async (req, res) => {
	console.log(req.params)
	try {
		const remove = await Comment.destroy({
			where: {
				id: req.params.id,
				post_id: req.params.post_id
			}
		})
		res.send({ msg: `Post ${req.params.id} was removed.` })
	} catch (error) {
		throw error
	}
})

module.exports = CommentRoute
