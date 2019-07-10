import React from 'react'
import { View, Text } from 'react-native'

const ProfileDetails = ({ username, profileImage, followers, posts }) => {
	const measureFollowers = () => {
		if (!followers) {
			return <Text>Followers: 0</Text>
		} else {
			return <Text>Followers: {followers.length}</Text>
		}
	}
	return (
		<View style={styles.container}>
			<Text>{username}</Text>
			{measureFollowers()}
			{/* <Text>Followers: {followers.length}</Text> */}
		</View>
	)
}

export default ProfileDetails

const styles = {
	container: {
		alignSelf: 'stretch',
		backgroundColor: '#f8f8f8',
		height: 250,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2
	}
}
