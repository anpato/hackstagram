import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Input = ({
	label,
	value,
	onChangeText,
	placeholder,
	secureTextEntry,
	name,
	disabled,
	onPress
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				defaultValue={value}
				placeholder={placeholder}
				placeholderTextColor="rgba(255,255,255,0.3)"
				onChangeText={onChangeText}
				style={styles.formInput}
			/>
			<TouchableOpacity onPress={onPress} disabled={disabled}>
				<Ionicons
					name={name}
					style={disabled === true ? styles.iconDisabled : styles.icon}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = {
	container: {
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		width: 300
	},
	formInput: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
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
	},
	icon: {
		opacity: 1,
		color: '#f8f8f8',
		fontSize: 32
	},
	iconDisabled: {
		opacity: 0.3,
		color: '#f8f8f8',
		fontSize: 32
	}
}
export { Input }
