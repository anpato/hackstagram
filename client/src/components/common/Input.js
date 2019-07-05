import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Input = ({
	label,
	value,
	onChangeText,
	placeholder,
	secureTextEntry,
	name,
	disabled,
	onPress,
	error,
	username,
	email
}) => {
	return (
		<View style={styles.container}>
			{username === true ? (
				<Text style={styles.errorText}>
					{error === true ? 'Username in use' : email === true}
				</Text>
			) : email === true ? (
				<Text style={styles.errorText}>
					{error === true ? 'Email in use' : ''}
				</Text>
			) : null}
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				defaultValue={value}
				placeholder={placeholder}
				placeholderTextColor="rgba(255,255,255,0.3)"
				onChangeText={onChangeText}
				style={error === true ? styles.errorInput : styles.formInput}
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
	},
	errorInput: {
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
		borderBottomColor: 'red',
		borderBottomWidth: 2,
		color: '#f8f8f8'
	},
	errorText: {
		color: 'red',
		position: 'absolute',
		left: 200,
		top: 50,
		fontSize: 12
	}
}
export { Input }
