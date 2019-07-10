import React, { Component } from 'react'
import { ScrollView, Text, AsyncStorage, RefreshControl } from 'react-native'
import ProfileDetails from '../src/components/ProfileDetails'
import { Button, Spinner } from '../src/components/common'
import { getUser, getFollowersAmount } from '../src/services/apiService'
export default class Profile extends Component {
	constructor() {
		super()
		this.state = {
			userData: [],
			followers: [],
			refreshing: false
		}
	}

	async componentDidMount() {
		try {
			await this.fetchUserProfile()
		} catch (error) {}
	}

	fetchUserProfile = async () => {
		const data = await AsyncStorage.getItem('user')
		const user = JSON.parse(data)
		const userData = await getUser(user.id)
		const followers = await getFollowersAmount(user.id)
		this.setState({ userData, followers })
	}

	handleRefresh = async () => {
		this.setState({ refreshing: true })
		await this.fetchUserProfile()
		this.setState({ refreshing: false })
	}

	renderUserData = () => {
		const { userData, followers } = this.state

		if (userData) {
			return (
				<ProfileDetails
					userId={userData.id}
					username={userData.username}
					profileImage={userData.profileImage}
					followers={followers[0]}
					following={followers[1]}
					posts={userData.posts}
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
			<ScrollView
				contentContainerStyle={styles.container}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.handleRefresh}
					/>
				}>
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
