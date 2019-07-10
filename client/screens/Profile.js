import React, { Component } from 'react'
import { ScrollView, Text, AsyncStorage } from 'react-native'
import ProfileDetails from '../src/components/ProfileDetails'
import { Button, Spinner } from '../src/components/common'
import { getUser } from '../src/services/apiService'
export default class Profile extends Component {
	constructor() {
		super()
		this.state = {
			userData: []
		}
	}

	async componentDidMount() {
		try {
			await AsyncStorage.getItem('user')
				.then((resp) => JSON.parse(resp))
				.then((data) => this.fetchUserProfile(data.id))
		} catch (error) {}
	}

	fetchUserProfile = async (id) => {
		const userData = await getUser(id)
		this.setState({ userData })
	}

	renderUserData = () => {
		const { userData } = this.state
		if (userData) {
			console.log(userData.followers)
			return (
				<ProfileDetails
					username={userData.username}
					followers={userData.followers}
				/>
			)
		} else {
			return <Spinner />
		}
	}

	logout = async () => {
		await AsyncStorage.clear()
		this.props.navigation.navigate('Home')
	}
	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				{this.renderUserData()}
				<Button onPress={this.logout}>
					<Text>Log Out </Text>
				</Button>
			</ScrollView>
		)
	}
}

const styles = {
	container: {
		color: '#f8f8f8',
		flex: 1,
		alignItems: 'center'
	}
}
