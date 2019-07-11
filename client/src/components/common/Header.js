import React from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = ({ title, navigation }) => {
	handleLogOut = async () => {
		await AsyncStorage.clear()
		navigation.navigate('Home')
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.camera}>
				<Ionicons name="ios-camera" size={32} style={styles.iconCamera} />
			</TouchableOpacity>
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity onPress={handleLogOut} style={styles.logout}>
				<Ionicons name="ios-log-out" size={32} style={styles.iconSettings} />
			</TouchableOpacity>
		</View>
	)
}

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#f8f8f8',
		height: 100,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5
	},
	camera: {
		justifySelf: 'flex-start'
	},
	logout: {
		justifySelf: 'flex-end'
	},
	iconCamera: {
		marginLeft: 20,
		marginTop: 40,
		color: '#AE00E2'
	},
	iconSettings: {
		marginRight: 20,
		marginTop: 40,
		color: '#AE00E2'
	},
	title: {
		paddingTop: 20,
		marginTop: 20,
		fontSize: 20,
		color: '#333'
	}
}

export { Header }
