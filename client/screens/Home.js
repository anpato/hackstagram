import React, { useState, useEffect } from 'react'
import { View, AsyncStorage } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from '../src/components/common'

const Home = ({ navigation }) => {
	const [token, getToken] = useState(null)
	useEffect(() => {
		AsyncStorage.getItem('user')
			.then((data) => JSON.parse(data))
			.then((token) => getToken(token.token))
			.catch((err) => console.log(err))
		if (token) {
			navigation.navigate('Auth')
		}
	})

	return (
		<View style={styles.container}>
			<LinearGradient colors={['#3E0072', '#AE00E2']} style={styles.gradient}>
				<Button
					title="Sign In"
					style={{ marginTop: 20 }}
					onPress={() => navigation.navigate('SignIn')}
				/>
				<Button
					title="Create Account"
					onPress={() => navigation.navigate('CreateAccount')}
				/>
			</LinearGradient>
		</View>
	)
}
const styles = {
	container: {
		flex: 1
	},
	gradient: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
}

export default Home
