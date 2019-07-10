import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from '../src/components/common'

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
			const userData = await AsyncStorage.getItem('user')
			const items = JSON.parse(userData)
			const { token } = items
			if (token) {
				this.props.navigation.navigate('Auth')
			}
		} catch (error) {
			throw error
		}
	}

	render() {
		const {
			navigation: { navigate }
		} = this.props
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
