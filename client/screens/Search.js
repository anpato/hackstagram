import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from '../src/components/common'
import { search } from '../src/services/apiService'
export default class Search extends Component {
	constructor() {
		super()
		this.state = {
			loading: true,
			data: [],
			refreshing: false
		}
	}
	componentDidMount() {
		this.setState({ data: [] })
	}

	searchData = async () => {
		try {
			const resp = await search()
		} catch (error) {}
	}

	render() {
		return (
			<View>
				<Header search={true} />
				<Text>Search</Text>
			</View>
		)
	}
}
