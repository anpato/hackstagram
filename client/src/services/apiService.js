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
	console.log(data)
	try {
		const req = await api.post('/auth/login', data)
		console.log(req)
		return req.data.token
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
