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
		console.log(data)
		const req = await api.post('/auth/signup', data)
		return req
	} catch (error) {
		throw error
	}
}
