import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from '../src/components/common'
import { IP_ADDRESS } from 'react-native-dotenv'
console.log(IP_ADDRESS)

export default class Home extends Component {
	async componentDidMount() {
		try {
			await this.getToken()
		} catch (error) {
			throw error
		}
	}
	getToken = async () => {
		try {
			const token = await AsyncStorage.getItem('token')
			if (token) {
				this.props.navigation.navigate('Auth')
			}
		} catch (error) {}
	}

	render() {
		return (
			<View style={styles.container}>
				<LinearGradient colors={['#3E0072', '#AE00E2']} style={styles.gradient}>
					<Button
						title="Sign In"
						style={{ marginTop: 20 }}
						onPress={() => navigate('SignIn')}
					/>
					<Button
						title="Create Account"
						onPress={() => navigate('CreateAccount')}
					/>
				</LinearGradient>
			</View>
		)
	}
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
