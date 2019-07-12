const Axios = require('axios')
import { IP_ADDRESS } from 'react-native-dotenv'
const JwtToken = 'token'
const BASE_URL = `http://${IP_ADDRESS}:3001`

const api = Axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${JwtToken}`,
		'Access-Control-Allow-Origin': '*'
	}
})

export const signup = async (data) => {
	try {
		const req = await api.post('/auth/signup', data)
		return req
	} catch (error) {
		throw error
	}
}

export const login = async (data) => {
	try {
		const req = await api.post('/auth/login', data)
		return req.data
	} catch (error) {
		throw error
	}
}

export const getUsernames = async () => {
	try {
		const req = await api.get('/users/verify/username')
		return req.data
	} catch (error) {
		throw error
	}
}

export const getEmails = async () => {
	try {
		const req = await api.get('/users/verify/email')
		return req.data
	} catch (error) {
		throw error
	}
}

export const getUser = async (id) => {
	try {
		const user = await api.get(`/users/${id}`)
		return user.data
	} catch (error) {
		throw error
	}
}

export const getFollowersAmount = async (id) => {
	try {
		const followers = await api.get(`/users/${id}/followers`)
		return followers.data
	} catch (error) {
		throw error
	}
}

export const getUserPost = async (id) => {
	try {
		const resp = await api.get(`/users/${id}`)
		return resp.data.posts
	} catch (error) {
		throw error
	}
}

export const getFollowersPost = async (id) => {
	try {
		const resp = await api.get(`/followers/posts/${id}`)
		return resp.data
	} catch (error) {
		throw error
	}
}

export const recommendFollowers = async (id) => {
	try {
		const resp = await api.get(`/users/${id}/suggested`)
		return resp.data
	} catch (error) {
		throw error
	}
}
