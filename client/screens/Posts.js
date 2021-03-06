import React, { PureComponent } from 'react'
import {
	View,
	AsyncStorage,
	FlatList,
	LayoutAnimation,
	RefreshControl,
	Text
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Spinner, Header } from '../src/components/common'
import { getFollowersPost } from '../src/services/apiService'
import PostCard from '../src/components/PostCard'

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

	async componentWillMount() {
		try {
			await this.getUserId()
			await this.getUserToken()
			await this.getPosts()
		} catch (error) {
			throw error
		}
	}

	componentWillUpdate() {
		LayoutAnimation.easeInEaseOut()
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
				user: { username, posts }
			}
		} = post
		if (post) {
			for (let i = 0; i < posts.length; i++) {
				return (
					<PostCard
						key={posts[i].id}
						comments={posts[i].comments}
						postLikes={posts[i].postLikes}
						username={username}
						userId={posts[i].userId}
						image={posts[i].image}
						navigation={navigation}
						likes={posts[i].likes}
					/>
				)
			}
		} else {
			return <Text>No Posts</Text>
		}
	}

	handleRefresh = async () => {
		this.setState({ refreshing: true })
		await this.getPosts()
		this.setState({ refreshing: false })
	}

	render() {
		const { loading, posts, refreshing } = this.state
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
					{loading === true && !refreshing ? (
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
		marginTop: 5,
		color: '#f8f8f8',
		alignItems: 'center',
		justifyContent: 'center'
	}
}
