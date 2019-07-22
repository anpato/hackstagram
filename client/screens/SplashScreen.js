import React, { Component } from 'react'
import { Image, AsyncStorage, LayoutAnimation } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
export default class SplashScreen extends Component {
	constructor() {
		super()
		this.state = {
			user: null
		}
	}

	async componentDidMount() {
		try {
			const token = await AsyncStorage.getItem('user')
			const user = JSON.parse(token)
			this.setState({ user: user.token })
			setTimeout(() => {
				this.props.navigation.navigate('Auth')
			}, 2000)
		} catch (error) {
			setTimeout(() => {
				this.props.navigation.navigate('Home')
			}, 2000)
		}
	}

	componentWillUnmount() {
		LayoutAnimation.easeInEaseOut()
	}

	render() {
		return (
			<LinearGradient colors={['#3E0072', '#AE00E2']} style={styles.container}>
				<Image source={require('../src/assets/splash.png')} />
			</LinearGradient>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
}
