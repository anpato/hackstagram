const { User, Post, Comment, Follower } = require('./models')
const { fakeUsers } = require('./fakeUsers')
const { fakePosts } = require('./fakePosts')

const main = async () => {
	await User.destroy({ where: {} })
	await Post.destroy({ where: {} })
	await Comment.destroy({ where: {} })
	await Follower.destroy({ where: {} })
	// Seed Data

	const user = await User.create({
		firstName: 'John',
		lastName: 'Smith',
		username: 'tester',
		email: 'tester@mail.com',
		password: '1234',
		skills: ['react', 'Python', 'Mongo']
	})

	await User.create({
		firstName: 'Jane',
		lastName: 'Doe',
		username: 'test',
		email: 'test@mail.com',
		password: '1234',
		skills: ['HTML', 'Css', 'react']
	})
	await User.create({
		firstName: 'Jackie',
		lastName: 'Legs',
		username: 'test3',
		email: 'test3@mail.com',
		password: '1234',
		skills: ['HTML', 'Css']
	})

	const post = await Post.create({
		title: 'Test 1',
		description: 'testing 1 post'
	})

	const comment = await Comment.create({
		title: 'Cool Post'
	})

	const fakeUserData = await User.bulkCreate(fakeUsers, { returning: true })
	// const fakePostData = await Post.bulkCreate(fakePosts, { returning: true })

	// console.log(user)
	await user.addPost(post)
	await user.addComment(comment)

	await post.addComment(comment)
}
async function run() {
	try {
		await main()
	} catch (e) {
		console.error(e)
	} finally {
		await process.exit()
	}
}

run()
