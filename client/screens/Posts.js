import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Spinner } from '../src/components/common'
export default class Posts extends Component {
	constructor() {
		super()
		this.state = {
			userId: null,
			isAuthenticated: false
		}
	}
	async componentDidMount() {
		try {
			await this.getUserId()
			await this.getUserToken()
		} catch (error) {
			throw error
		}
	}

	getUserToken = async () => {
		try {
			const getItems = await AsyncStorage.getItem('user')
			const userData = JSON.parse(getItems)
			if (userData) {
				this.setState({ isAuthenticated: true })
			}
		} catch (error) {
			throw error
		}
	}

	getUserId = async () => {
		try {
			const getItems = await AsyncStorage.getItem('user')
			const userData = JSON.parse(getItems)
			this.setState({ userId: userData.id })
		} catch (error) {
			throw error
		}
	}

	renderPostScreen = () => {
		if (this.state.isAuthenticated === true) {
			return <Text>POsts</Text>
		} else {
			return <Spinner />
		}
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				{this.renderPostScreen()}
			</ScrollView>
		)
	}
}

const styles = {
	container: {
		color: '#f8f8f8',
		flex: 1,
		alignItems: 'center'
		// backgroundColor: '#6d6d6d'
	}
}
