import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Card, CardSection } from './common'

const PostCard = ({
	username,
	userId,
	image,
	description,
	postLikes,
	comments,
	navigation
}) => {
	return (
		<Card>
			<CardSection>
				<TouchableOpacity
					key={userId}
					onPress={() =>
						navigation.push('ProfileScreen', {
							userId: userId
						})
					}>
					<Text style={styles.username}>{username}</Text>
				</TouchableOpacity>
			</CardSection>
			<Image source={{ uri: image }} style={styles.image} />
			<CardSection>
				<Text>{description}</Text>
			</CardSection>
			<CardSection>
				<View style={styles.subContent}>
					<Text style={styles.details}>Likes: {postLikes.length}</Text>
					<TouchableOpacity>
						<Text style={styles.details}>{`View All ${
							comments.length
						} comments`}</Text>
					</TouchableOpacity>
				</View>
			</CardSection>
		</Card>
	)
}

const styles = {
	image: {
		height: 200,
		width: 380
	},
	container: {
		flex: 1
	},
	subContent: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between'
	},
	username: {
		fontSize: 16,
		fontWeight: '700'
	},
	details: {
		fontSize: 15
	}
}

export default PostCard
