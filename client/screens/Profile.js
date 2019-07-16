import React, { PureComponent } from 'react'
import {
	ScrollView,
	View,
	AsyncStorage,
	RefreshControl,
	FlatList,
	ActivityIndicator,
	LayoutAnimation
} from 'react-native'
import uuid from 'uuid/v4'
import ProfileDetails from '../src/components/ProfileDetails'
import { Spinner, Header } from '../src/components/common'
import {
	getUser,
	getFollowersAmount,
	getUserPost
} from '../src/services/apiService'
import ProfilePosts from '../src/components/ProfilePosts'
export default class Profile extends PureComponent {
	constructor() {
		super()
		this.state = {
			currentUser: null,
			userId: null,
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
		} catch (error) {
			throw error
		}
	}

	componentWillUpdate() {
		LayoutAnimation.easeInEaseOut()
	}

	fetchUserProfile = async () => {
		const { navigation } = this.props
		const userId = navigation.getParam('userId')
		if (userId) {
			const userData = await getUser(userId)
			const followers = await getFollowersAmount(userId)
			const posts = await getUserPost(userId)
			this.setState({ userData, followers, posts })
			if (posts) {
				this.setState({ data: true })
			}
		} else {
			const data = await AsyncStorage.getItem('user')
			const user = JSON.parse(data)
			this.setState({ currentUser: user.id })
			const userData = await getUser(user.id)
			const followers = await getFollowersAmount(user.id)
			const posts = await getUserPost(user.id)
			this.setState({ userData, followers, posts })
			if (posts) {
				this.setState({ data: true })
			}
		}
	}

	handleRefresh = async () => {
		this.setState({ refreshing: true, data: false })
		await this.fetchUserProfile()
		this.setState({ refreshing: false, data: true })
	}

	renderUserData = () => {
		const { userData, followers, currentUser, userId } = this.state

		if (userData) {
			if (currentUser) {
				return (
					<ProfileDetails
						userId={userData.id}
						username={userData.username}
						profileImage={userData.profileImage}
						followers={followers[0]}
						following={followers[1]}
						posts={userData.posts}
						currentUser={currentUser}
					/>
				)
			} else {
				return (
					<ProfileDetails
						userId={userData.id}
						username={userData.username}
						profileImage={userData.profileImage}
						followers={followers[0]}
						following={followers[1]}
						posts={userData.posts}
						userId={userId}
					/>
				)
			}
		} else {
			return <Spinner />
		}
	}

	renderItem = (post) => {
		const {
			item: { id, image }
		} = post
		const { navigation } = this.props
		return <ProfilePosts image={image} postId={id} navigation={navigation} />
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
						data={posts}
						numColumns={4}
						showsVerticalScrollIndicator={false}
						refreshing={this.state.data === false ? true : false}
						contentContainerStyle={styles.listStyle}
						maxToRenderPerBatch={2}
						initialNumToRender={4}
						onEndReachedThreshold={0.5}
						renderItem={this.renderItem}
						keyExtractor={(posts) => posts.id.toString()}
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
