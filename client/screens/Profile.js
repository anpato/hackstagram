import React, { Component } from 'react'
import {
	ScrollView,
	View,
	Text,
	AsyncStorage,
	RefreshControl,
	FlatList,
	ActivityIndicator,
	LayoutAnimation
} from 'react-native'
import uuid from 'uuid/v4'
import ProfileDetails from '../src/components/ProfileDetails'
import { Button, Spinner, Header } from '../src/components/common'
import {
	getUser,
	getFollowersAmount,
	getUserPost
} from '../src/services/apiService'
import ProfilePosts from '../src/components/ProfilePosts'
export default class Profile extends Component {
	constructor() {
		super()
		this.state = {
			userData: [],
			followers: [],
			posts: [],
			refreshing: false,
			data: false
		}
	}

	async componentDidMount() {
		try {
			this.setState({ data: false })
			await this.fetchUserProfile()
		} catch (error) {}
	}

	componentWillUpdate() {
		LayoutAnimation.spring()
	}

	fetchUserProfile = async () => {
		const data = await AsyncStorage.getItem('user')
		const user = JSON.parse(data)
		const userData = await getUser(user.id)
		const followers = await getFollowersAmount(user.id)
		const posts = await getUserPost(user.id)
		this.setState({ userData, followers, posts })
		if (posts) {
			this.setState({ data: true })
		}
	}

	handleRefresh = async () => {
		this.setState({ refreshing: true, data: false })
		await this.fetchUserProfile()
		this.setState({ refreshing: false, data: true })
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

	renderItem = (post) => {
		const { data } = this.state
		const { item } = post
		return <ProfilePosts image={item.image} />
	}

	render() {
		const { posts } = this.state
		return (
			<View
				style={styles.container}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.handleRefresh}
					/>
				}>
				<Header title="Profile" navigation={this.props.navigation} />
				{this.renderUserData()}
				{this.state.data === false ? (
					<Spinner size="large" />
				) : (
					<FlatList
						numColumns={4}
						showsVerticalScrollIndicator={false}
						refreshing={this.state.data === false ? true : false}
						contentContainerStyle={styles.listStyle}
						data={posts}
						initialNumToRender={5}
						renderItem={this.renderItem}
						keyExtractor={() => uuid()}
					/>
				)}
			</View>
		)
	}
}

const styles = {
	container: {
		color: '#f8f8f8',
		flex: 1
	},
	listStyle: {
		alignItems: 'center',
		marginTop: 5
	}
}
