import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
export default class Search extends Component {
	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<Text>Search</Text>
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
