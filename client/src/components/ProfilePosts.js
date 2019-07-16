import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

const ProfilePosts = ({ image, postId, navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.push('OnePost', { postId: postId })}>
			<Image source={{ uri: image }} style={styles.imageStyle} />
		</TouchableOpacity>
	)
}
export default ProfilePosts

const styles = {
	imageStyle: {
		height: 90,
		width: 90,
		margin: 5
	}
}
