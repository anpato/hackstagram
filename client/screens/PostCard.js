import React, { PureComponent } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import { getPost } from '../src/services/apiService'
import { TextInput } from 'react-native-gesture-handler'
import { Input, Button, Card, CardSection } from '../src/components/common'
let deviceWidth = Dimensions.get('window').width - 10
let deviceHeight = Dimensions.get('window').height - 100
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
			postData: { image, title, postLikes }
		} = this.state
		return (
			<View style={styles.container}>
				<Card style={styles.card}>
					<CardSection>
						<Text>{title}</Text>
					</CardSection>
					<Image
						source={{ uri: image }}
						style={{ height: 300, width: deviceWidth }}
					/>
					<CardSection style={styles.commentForm}>
						<TextInput placeholder="Comment" style={styles.input} />
						<Button title="Comment" />
					</CardSection>
				</Card>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	card: {
		width: deviceWidth,
		height: deviceHeight
	},
	commentForm: {
		width: deviceWidth,
		flexDirection: 'row'
	},
	input: {
		flex: 1,
		alignSelf: 'stretch',
		color: '#333'
	}
}
