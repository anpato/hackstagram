import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { Input, Button } from '../src/components/common'
import { LinearGradient } from 'expo-linear-gradient'
import { login } from '../src/services/apiService'

export default class SignIn extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			token: null
		}
	}

	componentDidMount() {
		this.setState({ token: null })
	}

	handleSignIn = async () => {
		const { username, password } = this.state
		const user = {
			username: username.toLowerCase(),
			password: password
		}
		try {
			const token = await login(user)
			if (token) {
				await AsyncStorage.setItem('token', token)
				this.setState({ token })
			}
		} catch (error) {
			throw error
		}
	}

	render() {
		const { username, password, token } = this.state
		if (token) {
			return this.props.navigation.navigate('Auth')
		}
		return (
			<LinearGradient
				contentContainerStyle={{ flexGrow: 1 }}
				colors={['#3E0072', '#AE00E2']}
				style={styles.container}>
				<View>
					<Input
						placeholder="Username"
						value={username}
						onChangeText={(username) => this.setState({ username })}
					/>
					<Input
						placeholder="Password"
						value={password}
						secureTextEntry={true}
						onChangeText={(password) => this.setState({ password })}
					/>
					<Button title="Sign In" onPress={this.handleSignIn} />
				</View>
			</LinearGradient>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
}
