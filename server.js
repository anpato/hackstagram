const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const userRouter = require('./Routes/userRouter')
const followersPostRouter = require('./Routes/followersPosts')
const createAccountRouter = require('./Routes/createAccountRouter')
const searchRouter = require('./Routes/SearchRouter')
const postsRouter = require('./Routes/postsRouter')
const { userAuthorized } = require('./Auth/Auth')
const AuthRouter = require('./Routes/AuthRouter')
const AppRouter = require('./Routes/AppRouter')
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
app.use('/verify', createAccountRouter)
app.use('/followers', followersPostRouter)
app.use('/posts', postsRouter)
app.use('/search', searchRouter)
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
