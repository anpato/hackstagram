import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
	return <View style={styles.containerStyle}>{props.children}</View>
}

export { Card }

const styles = {
	containerStyle: {
		backgroundColor: '#ede7f6',
		borderRadius: 8,
		overflow: 'hidden',
		borderColor: '#bbb5c3',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		marginBottom: 20
	}
}
