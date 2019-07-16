import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { Card } from './Card'
import { CardSection } from './CardSection'

const UserCard = ({ username, profileImage, userId, navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.push('ProfileScreen', { userId: userId })}
			key={userId}>
			<Card>
				<CardSection style={{ width: 150 }}>
					<Text>{username}</Text>
				</CardSection>
				<CardSection>
					<Image
						source={
							profileImage
								? { uri: profileImage }
								: require('../../assets/emptyProfile.jpg')
						}
						style={{ height: 90, width: 90 }}
					/>
				</CardSection>
			</Card>
		</TouchableOpacity>
	)
}

export { UserCard }
