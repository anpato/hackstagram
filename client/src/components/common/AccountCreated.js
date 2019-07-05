import React from 'react'
import { Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import CheckMark from '../../assets/Checkmark.png'

const AccountCreated = ({ navigation, timer }) => {
	console.log(navigation)
	if (timer === 0) {
		return navigation.navigate('Home')
	}
	return (
		<LinearGradient
			contentContainerStyle={{ flexGrow: 1 }}
			colors={['#3E0072', '#AE00E2']}
			style={styles.container}>
			<View style={styles.textContainer}>
				<Image source={CheckMark} />
				<Text style={styles.text}>Account Created!</Text>
				<Text style={styles.text}>
					Redirecting to home in: <Text style={styles.timer}>{timer}</Text>
				</Text>
			</View>
		</LinearGradient>
	)
}

export { AccountCreated }
const styles = {
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: '#f8f8f8',
		fontSize: 20,
		marginTop: 20
	},
	textContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		justifySelf: 'flex-end'
	},
	timer: {
		color: '#30D000',
		fontWeight: 700
	}
}
