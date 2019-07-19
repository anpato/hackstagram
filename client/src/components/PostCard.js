import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Card, CardSection } from './common'

const PostCard = ({
	username,
	userId,
	image,
	likes,
	description,
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
					<Text>{likes} Likes</Text>
					<TouchableOpacity>
						{comments.length === 0 ? (
							<Text>{`${comments.length} Comments`}</Text>
						) : (
							<Text>{`View All ${comments.length} Comments`}</Text>
						)}
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
