import React from 'react'
import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import emptyProfile from '../assets/emptyProfile.jpg'
const ProfileDetails = ({
	username,
	profileImage,
	followerCount,
	followingCount,
	posts,
	userId
}) => {
	const renderFollowButton = () => {
		if (!userId) {
			return (
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Follow</Text>
				</TouchableOpacity>
			)
		} else {
			return (
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Settings</Text>
				</TouchableOpacity>
			)
		}
	}
	const measureFollowers = () => {
		return (
			<View style={styles.containerDetails}>
				<View style={styles.containerRow}>
					<View style={styles.containerColumn}>
						<Text>Posts</Text>
						<Text>{posts ? posts.length : 0}</Text>
					</View>
					<View style={styles.containerColumn}>
						<Text>Followers</Text>
						<Text>{followerCount}</Text>
					</View>
					<View style={[styles.containerColumn, styles.containerColumnEnd]}>
						<Text>Following</Text>
						<Text>{followingCount}</Text>
					</View>
				</View>
				{renderFollowButton()}
			</View>
		)
	}
	return (
		<View style={styles.container}>
			<View style={styles.userInfo}>
				{profileImage ? (
					<Image source={{ uri: profileImage }} style={styles.image} />
				) : (
					<Image
						source={require('../assets/emptyProfile.jpg')}
						style={styles.image}
					/>
				)}

				<Text>{username}</Text>
			</View>
			{measureFollowers()}
		</View>
	)
}

export default ProfileDetails

const styles = {
	container: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		backgroundColor: '#f8f8f8',
		height: 150,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2
	},
	containerRow: {
		flexDirection: 'row'
	},
	containerColumn: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		borderLeftWidth: 1,
		borderColor: '#ce93d8'
	},
	containerColumnEnd: {
		borderRightWidth: 1,
		borderColor: '#ce93d8'
	},
	containerDetails: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2
	},
	button: {
		alignSelf: 'center',
		justifySelf: 'flex-end',
		backgroundColor: '#ab47bc',
		paddingTop: 3,
		paddingBottom: 3,
		paddingRight: 10,
		paddingLeft: 10,
		marginTop: 10,
		marginRight: 20,
		borderRadius: 6,
		opacity: 0.8
	},
	buttonText: {
		fontSize: 16,
		color: '#f8f8f8'
	},
	image: {
		height: 60,
		width: 60,
		borderRadius: 30
	},
	userInfo: {
		alignSelf: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginLeft: 10,
		flex: 1
	}
}
