import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from '../src/components/common'
export default class Search extends Component {
	render() {
		return (
			<View>
				<Header search={true} />
				<Text>Search</Text>
			</View>
		)
	}
}
