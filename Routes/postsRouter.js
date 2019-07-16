const express = require('express')
const postsRouter = express.Router()
const {
	Post,
	PostLike,
	Comment,
	CommentLike,
	User
} = require('../database/models')

postsRouter.get('/:post_id', async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.post_id, {
			include: [
				{ model: PostLike },
				{ model: Comment, include: [{ model: CommentLike }], include: [User] }
			]
		})
		res.send(post)
	} catch (error) {
		throw error
	}
})

postsRouter.get('/:post_id/comments', async (req, res) => {
	try {
		const comments = await Post.findByPk(req.params.post_id, {
			include: [
				{
					model: Comment,
					include: [User]
				}
			]
		})
		res.send(comments)
	} catch (error) {
		throw error
	}
})

postsRouter.post('/upload/user/:user_id', async (req, res) => {
	try {
		const user = await User.findByPk(req.params.user_id)
		if (user) {
			const post = await Post.create(req.body)
			await post.setUser(user)
			res.send(post)
		}
	} catch (error) {
		throw error
	}
})

postsRouter.delete('/:post_id', async (req, res) => {
	try {
		const post = await Post.destroy({
			where: { id: req.params.post_id }
		})
		res.send({ msg: `Post ${req.params.post_id} was deleted!` })
	} catch (error) {
		throw error
	}
})

module.exports = postsRouter
