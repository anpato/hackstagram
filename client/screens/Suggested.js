import React, { PureComponent } from 'react'
import {
	ScrollView,
	View,
	AsyncStorage,
	RefreshControl,
	LayoutAnimation
} from 'react-native'
import { Header, Spinner } from '../src/components/common'
import { recommendFollowers } from '../src/services/apiService'
import { FlatList } from 'react-native-gesture-handler'
import { UserCard } from '../src/components/common/UserCard'
export default class Search extends PureComponent {
	constructor() {
		super()
		this.state = {
			currentUser: null,
			users: [],
			loading: true,
			refreshing: false
		}
	}

	async componentDidMount() {
		try {
			await this.getSuggested()
		} catch (error) {
			throw error
		}
	}

	componentWillUpdate() {
		LayoutAnimation.spring()
	}

	getSuggested = async (id) => {
		this.setState({ loading: true })
		const data = await AsyncStorage.getItem('user')
		const resp = JSON.parse(data)
		this.setState({ currentUser: resp.id || id })
		const users = await recommendFollowers(resp.id || id)
		if (users) {
			this.setState({ users, loading: false })
		}
	}

	renderItem = (user) => {
		const {
			item: { id, username, profileImage }
		} = user
		const { navigation } = this.props
		return (
			<UserCard
				userId={id}
				username={username}
				profileImage={profileImage}
				navigation={navigation}
			/>
		)
	}

	handleRefresh = async () => {
		this.setState({ refreshing: true })
		await this.getSuggested(this.state.currentUser)
		this.setState({ refreshing: false })
	}

	render() {
		const { users, loading } = this.state
		return (
			<View style={styles.container}>
				<Header title="Suggested" navigation={this.props.navigation} />
				<ScrollView
					contentContainerStyle={styles.scrollContainer}
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
							contentContainerStyle={styles.scrollContainer}
							numColumns={2}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.listStyle}
							maxToRenderPerBatch={1}
							initialNumToRender={1}
							onEndReachedThreshold={0.5}
							data={users}
							renderItem={this.renderItem}
							keyExtractor={(users) => users.id.toString()}
						/>
					)}
				</ScrollView>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1
	},
	scrollContainer: {
		color: '#f8f8f8',
		alignItems: 'center'
	}
}
