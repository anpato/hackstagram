import React, { PureComponent } from 'react'
import { ScrollView, View, AsyncStorage, RefreshControl } from 'react-native'
import { Header, Card, CardSection, Spinner } from '../src/components/common'
import { recommendFollowers } from '../src/services/apiService'
import { FlatList } from 'react-native-gesture-handler'
import { UserCard } from '../src/components/common/UserCard'
export default class Search extends PureComponent {
	constructor() {
		super()
		this.state = {
			users: [],
			loading: true
		}
	}

	async componentDidMount() {
		try {
			this.setState({ loading: true })
			await this.getSuggested()
		} catch (error) {
			throw error
		}
	}

	getSuggested = async () => {
		const data = await AsyncStorage.getItem('user')
		const resp = JSON.parse(data)
		const users = await recommendFollowers(resp.id)
		if (users) this.setState({ users, loading: false })
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

	render() {
		const { users, loading } = this.state
		return (
			<View style={styles.container}>
				<Header title="Suggested" navigation={this.props.navigation} />
				<ScrollView
					contentContainerStyle={styles.scrollContainer}
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
