import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createSwitchNavigator
} from 'react-navigation'
import Home from './screens/Home'
import CreateAccount from './screens/CreateAccount'
import SignIn from './screens/SignIn'
import Posts from './screens/Posts'
import Profile from './screens/Profile'

const AppNavigator = createStackNavigator(
	{
		Home: Home,
		CreateAccount: CreateAccount,
		SignIn: SignIn
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
)

const ProfileStack = createStackNavigator({
	Profile: Profile
})

const PostStack = createStackNavigator({
	Post: Posts
})

const TabNavigator = createBottomTabNavigator({
	Home: PostStack,
	Profile: ProfileStack
})

export default createAppContainer(
	createSwitchNavigator({
		App: AppNavigator,
		Auth: TabNavigator
	})
)
