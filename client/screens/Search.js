import React, { Component } from 'react'
import {
	View,
	Text,
	FlatList,
	Image,
	LayoutAnimation,
	TouchableOpacity,
	RefreshControl
} from 'react-native'
import { Header, Spinner, CardSection } from '../src/components/common'
import { getAllUsers } from '../src/services/apiService'

export default class Search extends Component {
	constructor() {
		super()
		this.state = {
			query: '',
			loading: false,
			refreshing: false,
			users: []
		}
	}

	async componentDidMount() {
		try {
			this.setState({ loading: true })
			this.getUsers()
		} catch (error) {
			throw error
		}
	}

	getUsers = async () => {
		try {
			const users = await getAllUsers()
			this.setState({ users })
			if (users) this.setState({ loading: false })
		} catch (error) {
			throw error
		}
	}

	componentWillUpdate() {
		LayoutAnimation.spring()
	}

	handleSearch = async (query) => {
		const { users } = this.state
		const getUsers = await getAllUsers()
		const searchUsers = users.filter((user) =>
			user.username.includes(query.toLowerCase())
		)
		this.setState({ users: searchUsers })

		if (query.length < 3) return this.setState({ users: getUsers })
	}

	renderItem = (user) => {
		const {
			item: { id, profileImage, username }
		} = user
		const { navigation } = this.props
		return (
			<TouchableOpacity
				key={id}
				onPress={() => navigation.push('ProfileScreen', { userId: id })}>
				<CardSection style={styles.scrollContainer}>
					<Image source={{ uri: profileImage }} style={styles.imageStyle} />
					<Text style={styles.fontStyle}>{username}</Text>
				</CardSection>
			</TouchableOpacity>
		)
	}

	handleRefresh = async () => {
		this.setState({ refreshing: true })
		await this.getUsers()
		this.setState({ refreshing: false })
	}

	render() {
		const { labels, users, loading, refreshing } = this.state
		return (
			<View style={styles.container}>
				<Header
					search={true}
					labels={labels}
					onChangeText={this.handleSearch}
				/>
				{loading === true && !refreshing ? (
					<Spinner />
				) : (
					<FlatList
						refreshControl={
							<RefreshControl
								refreshing={this.state.refreshing}
								onRefresh={this.handleRefresh}
							/>
						}
						data={users}
						maxToRenderPerBatch={1}
						initialNumToRender={2}
						showsVerticalScrollIndicator={false}
						renderItem={this.renderItem}
						keyExtractor={(user) => user.id.toString()}
					/>
				)}
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1
	},
	scrollContainer: {
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#f8f8f8'
	},
	imageStyle: {
		height: 50,
		width: 50,
		padding: 10
	},
	fontStyle: {
		fontSize: 16,
		marginLeft: 10
	}
}
