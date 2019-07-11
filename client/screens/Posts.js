import React, { Component } from 'react'
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

export default class Posts extends React.PureComponent {
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

	componentWillUpdate() {
		LayoutAnimation.easeInEaseOut()
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
		const {
			item: {
				user: { username, posts }
			}
		} = post
		for (let i = 0; i < posts.length; i++) {
			return (
				<Card key={posts[i].id}>
					<CardSection>
						<TouchableOpacity key={posts[i].userId}>
							<Text>{username}</Text>
						</TouchableOpacity>
					</CardSection>
					<Image source={{ uri: posts[i].image }} style={styles.image} />
					<CardSection>
						<Text>{posts[i].description}</Text>
					</CardSection>
					<CardSection>
						<View>
							<Text>Likes: {posts[i].postLikes.length}</Text>
							<TouchableOpacity>
								<Text>{`${posts[i].comments.length} comments`}</Text>
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

	renderPostScreen = () => {
		const { loading, posts } = this.state
		if (loading) {
			return <Spinner />
		} else {
			return (
				<FlatList
					maxToRenderPerBatch={2}
					data={posts}
					initialNumToRender={4}
					onEndReachedThreshold={0.5}
					renderItem={this.renderItem}
					keyExtractor={() => uuid()}
				/>
			)
		}
	}

	render() {
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
					{this.renderPostScreen()}
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
		// backgroundColor: '#6d6d6d'
	},
	image: {
		height: 200,
		width: 380
	}
}
