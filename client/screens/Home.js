import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from '../src/components/common'
export default function Home({ navigation: { navigate } }) {
	return (
		<View style={styles.container}>
			<LinearGradient colors={['#3E0072', '#AE00E2']} style={styles.gradient}>
				<Button
					title="Sign In"
					style={{ marginTop: 20 }}
					onPress={() => navigate('SignIn')}
				/>
				<Button
					title="Create Account"
					onPress={() => navigate('CreateAccount')}
				/>
			</LinearGradient>
		</View>
	)
}

const styles = {
	container: {
		flex: 1
	},
	gradient: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
}
