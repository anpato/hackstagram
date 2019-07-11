import React, { Component } from 'react'
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
export default class Search extends Component {
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
			item: { username, profileImage }
		} = user
		return (
			<TouchableOpacity>
				<Card>
					<CardSection style={{ width: 150 }}>
						<Text>{username}</Text>
					</CardSection>
					<CardSection>
						<Image
							source={{ uri: profileImage }}
							style={{ height: 90, width: 90 }}
						/>
					</CardSection>
				</Card>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title="Search" navigation={this.props.navigation} />
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
						maxToRenderPerBatch={2}
						initialNumToRender={4}
						onEndReachedThreshold={0.5}
						data={this.state.users}
						renderItem={this.renderItem}
						keyExtractor={() => uuid()}
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
