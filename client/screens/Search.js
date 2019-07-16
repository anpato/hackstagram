import React, { PureComponent } from 'react'
import uuid from 'uuid/v4'
import {
	Image,
	ScrollView,
	Text,
	View,
	AsyncStorage,
	RefreshControl
} from 'react-native'
import { Header, Card, CardSection } from '../src/components/common'
import { recommendFollowers } from '../src/services/apiService'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import EmptyProfileImage from '../src/assets/emptyProfile.jpg'
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
		} catch (error) {}
	}

	getSuggested = async () => {
		const data = await AsyncStorage.getItem('user')
		const resp = JSON.parse(data)
		const users = await recommendFollowers(resp.id)
		this.setState({ users })
	}

	renderItem = (user) => {
		const {
			item: { id, username, profileImage }
		} = user

		return (
			<TouchableOpacity
				onPress={() => {
					this.props.navigation.push('ProfileScreen', { userId: id })
				}}>
				<Card>
					<CardSection style={{ width: 150 }}>
						<Text>{username}</Text>
					</CardSection>
					<CardSection>
						<Image
							source={
								profileImage
									? { uri: profileImage }
									: require('../src/assets/emptyProfile.jpg')
							}
							style={{ height: 90, width: 90 }}
						/>
					</CardSection>
				</Card>
			</TouchableOpacity>
		)
	}
	keyExtractor = () => {
		const { users } = this.state
		const ids = users.map((user) => user.id)
		return ids
	}

	render() {
		const { users } = this.state
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
						keyExtractor={(users) => users.id}
					/>
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
		// flex: 1,
		alignItems: 'center'
		// backgroundColor: '#6d6d6d'
	}
}
