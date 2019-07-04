import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
function Button({ title, onPress, style, disabled }) {
	return (
		<TouchableOpacity
			style={disabled === true ? styles.buttonDisabled : styles.button}
			onPress={onPress}
			disabled={disabled}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	)
}
export { Button }
const styles = {
	buttonDisabled: {
		opacity: 0.2,
		alignSelf: 'stretch',
		backgroundColor: 'transparent',
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#F8F8F8',
		margin: 10
	},
	button: {
		opacity: 1,
		alignSelf: 'stretch',
		backgroundColor: 'transparent',
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#F8F8F8',
		margin: 10
	},
	buttonText: {
		alignSelf: 'center',
		color: '#f8f8f8',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
}
