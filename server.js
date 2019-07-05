const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const userRouter = require('./Routes/userRouter')
const PostRoute = require('./Routes/Post')
const CategoryRoute = require('./Routes/Category')
const { userAuthorized } = require('./Auth/Auth')
const AuthRouter = require('./Routes/AuthRouter')
const AppRouter = require('./Routes/AppRouter')
const CommentRoute = require('./Routes/CommentRouter')
const passport = require('passport')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3001

const app = express()

// intializing Middleware
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// App Routes
app.use('/users', userRouter)
app.use('/posts', PostRoute)
app.use('/categories', CategoryRoute)
app.use('/comments', CommentRoute)
app.use('/auth', AuthRouter)
app.use('/app', userAuthorized, AppRouter)
app.use(passport.initialize())

// Test Message
app.get('/', (req, res) => {
	try {
		res.send({ msg: 'Working' })
	} catch (error) {
		throw error
	}
})

// listening Port
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`)
})
