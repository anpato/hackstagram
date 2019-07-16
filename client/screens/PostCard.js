import React, { PureComponent } from 'react'
import { View, Image, Text } from 'react-native'
import { getPost } from '../src/services/apiService'
export default class PostCard extends PureComponent {
	constructor() {
		super()
		this.state = {
			postData: {}
		}
	}

	async componentDidMount() {
		const { navigation } = this.props
		try {
			const postId = navigation.getParam('postId')
			const postData = await getPost(postId)
			this.setState({ postData })
		} catch (error) {
			throw error
		}
	}

	render() {
		const {
			postData: { image, title, posLikes }
		} = this.state
		return (
			<View>
				<Text>{title}</Text>
				<Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
			</View>
		)
	}
}
