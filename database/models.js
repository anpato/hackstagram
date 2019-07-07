const { Sequelize } = require('sequelize')
const bcrypt = require('bcrypt')
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
	userId: {
		type: Sequelize.INTEGER,
		allowNull: true,
		referenceces: {
			model: 'user',
			key: 'userId'
		}
	},
	followerId: {
		type: Sequelize.INTEGER,
		allowNull: true,
		referenceces: {
			model: 'user',
			key: 'userId'
		}
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
	}
})

const PostLike = db.define('postLike', {
	likes: {
		type: Sequelize.INTEGER
	}
})

const Comment = db.define('comment', {
	title: {
		type: Sequelize.STRING
	}
})

const CommentLike = db.define('commentLike', {
	likes: {
		type: Sequelize.INTEGER
	}
})

User.beforeCreate(async (user, options) => {
	const hashedPassword = await bcrypt.hash(user.password, 12)
	user.password = hashedPassword
})

User.hasMany(Post, { onDelete: 'cascade' })
User.hasMany(PostLike, { onDelete: 'cascade' })
User.hasMany(Comment, { onDelete: 'cascade' })
User.hasMany(CommentLike, { onDelete: 'cascade' })

Follower.belongsTo(User)
Follower.hasMany(User)

Post.belongsTo(User)
Post.hasMany(Comment)
Post.hasMany(PostLike)

PostLike.belongsTo(Post)
PostLike.belongsTo(User)

Comment.belongsTo(User)
Comment.belongsTo(Post)
Comment.hasMany(CommentLike)

CommentLike.belongsTo(Comment)
CommentLike.belongsTo(User)

Follower.belongsTo(User)

module.exports = {
	User,
	Comment,
	CommentLike,
	Post,
	PostLike,
	Follower,
	db
}
