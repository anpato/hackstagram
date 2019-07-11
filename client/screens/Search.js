import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Header } from '../src/components/common'
export default class Search extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header title="Search" navigation={this.props.navigation} />
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<Text>Search</Text>
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
