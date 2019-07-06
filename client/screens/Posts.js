import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
export default class Posts extends Component {
	// static navigationOptions = {
	// 	title: 'Posts'
	// }
	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<Text>POsts</Text>
			</ScrollView>
		)
	}
}

const styles = {
	container: {
		color: '#f8f8f8',
		flex: 1,
		alignItems: 'center'
		// backgroundColor: '#6d6d6d'
	}
}
