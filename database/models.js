const { Sequelize } = require('sequelize')
const bcrypt = require('bcrypt')
const { fakeUsers } = require('./fakeUsers')
const db = new Sequelize(
	process.env.DATABASE_URL || 'postgres://localhost:5432/hackstagram',
	{
		database: 'hackstagram',
		dialect: 'postgres',
		define: {
			underscored: true
		}
	}
)
const User = db.define('user', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	profileImage: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	skills: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	}
})

const Follower = db.define('follower', {
	follower_id: {
		type: Sequelize.INTEGER
	}
})

const Post = db.define('post', {
	title: {
		type: Sequelize.STRING
	},
	image: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.TEXT
	},
	likes: Sequelize.INTEGER
})


const Comment = db.define('comment', {
	title: {
		type: Sequelize.STRING
	}
})


User.beforeBulkCreate(async (user, options) => {
	for (let i = 0; i < user.length; i++) {
		const hashedPassword = await bcrypt.hash(user[i].password, 12)
		user[i].password = hashedPassword
	}
	return user
})

User.beforeCreate(async (user, options) => {
	const hashedPassword = await bcrypt.hash(user.password, 12)
	user.password = hashedPassword
})

Follower.belongsTo(User, {
	as: 'user',
	through: 'following',
	foreignKey: 'follower_id'
})

User.hasMany(Post, { onDelete: 'cascade' })
User.hasMany(Comment, { onDelete: 'cascade' })
User.hasMany(Follower, { as: 'following' })
Post.belongsTo(User)
Post.hasMany(Comment)


Comment.belongsTo(User)
Comment.belongsTo(Post)


module.exports = {
	User,
	Comment,
	Post,
	Follower,
	db
}
