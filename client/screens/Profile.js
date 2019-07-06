import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
export default class Profile extends Component {
	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<Text>Profile</Text>
			</ScrollView>
		)
	}
}

const styles = {
	container: {
		color: '#f8f8f8',
		flex: 1,
		alignItems: 'center'
	}
}
