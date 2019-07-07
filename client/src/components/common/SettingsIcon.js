import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SettingsIcon = ({ name, navigation }) => {
	return (
		<TouchableOpacity onPress={navigation.navigate('Settings')}>
			<Ionicons name={name} size={32} style={styles.iconSettings} />
		</TouchableOpacity>
	)
}

export { SettingsIcon }
