import React from 'react'
import { View, Image } from 'react-native'

const ProfilePosts = ({ image }) => {
	return (
		<View>
			<Image source={{ uri: image }} style={styles.imageStyle} />
		</View>
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
