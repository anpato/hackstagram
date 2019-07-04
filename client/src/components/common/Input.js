import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const Input = ({
	label,
	value,
	handleChange,
	placeholder,
	secureTextEntry,
	onFocus
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				value={value}
				placeholder={placeholder}
				onChangeText={handleChange}
				style={styles.formInput}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 80,
		// flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		width: 300
	},
	formInput: {
		color: '#333',
		paddingRight: 5,
		paddingLeft: 5,
		marginTop: 40,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
		borderBottomColor: '#f8f8f8',
		borderBottomWidth: 2,
		color: '#f8f8f8'
	}
})
export { Input }
