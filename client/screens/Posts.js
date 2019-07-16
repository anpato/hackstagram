import React, { PureComponent } from 'react'
import {
	View,
	Text,
	AsyncStorage,
	FlatList,
	Image,
	LayoutAnimation,
	RefreshControl
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Spinner, Header, Card, CardSection } from '../src/components/common'
import { getFollowersPost } from '../src/services/apiService'
import uuid from 'uuid/v4'

export default class Posts extends PureComponent {
	constructor() {
		super()
		this.state = {
			userId: null,
			isAuthenticated: false,
			refreshing: false,
			loading: true,
			posts: []
		}
	}

	async componentDidMount() {
		try {
			await this.getUserId()
			await this.getUserToken()
			await this.getPosts()
		} catch (error) {
			throw error
		}
	}

	getUserToken = async () => {
		try {
			const getItems = await AsyncStorage.getItem('user')
			const userData = JSON.parse(getItems)
			if (userData) {
				this.setState({ isAuthenticated: true, userId: userData.id })
			}
		} catch (error) {
			throw error
		}
	}

	getPosts = async () => {
		try {
			const posts = await getFollowersPost(this.state.userId)
			await this.setState({ posts, loading: false })
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

	renderItem = (post) => {
		const { navigation } = this.props
		const {
			item: {
				user: { username, userId, posts }
			}
		} = post

		for (let i = 0; i < posts.length; i++) {
			return (
				<Card key={posts[i].id}>
					<CardSection>
						<TouchableOpacity
							key={userId}
							onPress={() =>
								navigation.push('ProfileScreen', {
									userId: userId
								})
							}>
							<Text>{username}</Text>
						</TouchableOpacity>
					</CardSection>
					<Image source={{ uri: posts[i].image }} style={styles.image} />
					<CardSection>
						<Text>{posts[i].description}</Text>
					</CardSection>
					<CardSection>
						<View style={styles.subContent}>
							<Text>Likes: {posts[i].postLikes.length}</Text>
							<TouchableOpacity>
								<Text>{`View All ${posts[i].comments.length} comments`}</Text>
							</TouchableOpacity>
						</View>
					</CardSection>
				</Card>
			)
		}
	}

	handleRefresh = async () => {
		this.setState({ refreshing: true })
		await this.getPosts()
		this.setState({ refreshing: false })
	}

	render() {
		const { loading, posts } = this.state
		return (
			<View style={styles.mainContainer}>
				<Header title="App" navigation={this.props.navigation} />
				<ScrollView
					contentContainerStyle={styles.container}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.handleRefresh}
						/>
					}>
					{loading === true ? (
						<Spinner />
					) : (
						<FlatList
							data={posts}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.container}
							maxToRenderPerBatch={1}
							initialNumToRender={1}
							onEndReachedThreshold={0.5}
							renderItem={this.renderItem}
							keyExtractor={(posts) => posts.id.toString()}
						/>
					)}
				</ScrollView>
			</View>
		)
	}
}

const styles = {
	mainContainer: {
		flex: 1
	},
	container: {
		color: '#f8f8f8',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		height: 200,
		width: 380
	},
	subContent: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between'
	}
}
