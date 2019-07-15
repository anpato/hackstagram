import React from 'react'
import { TouchableOpacity, AsyncStorage } from 'react-native'
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
import { Ionicons } from '@expo/vector-icons'
import Search from './screens/Search'
import Settings from './screens/Settings'

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

const SettingsStack = createStackNavigator(
	{
		Settings: Settings
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
)

const ProfileStack = createStackNavigator(
	{
		ProfileScreen: Profile
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
)

const SearchStack = createStackNavigator(
	{
		Search: Search
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
)

const PostStack = createStackNavigator(
	{
		Post: Posts
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
)

const TabNavigator = createBottomTabNavigator(
	{
		Post: PostStack,
		Search: SearchStack,
		ProfileTab: ProfileStack
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let IconComponent = Ionicons
				let iconName
				if (routeName === 'Post') {
					iconName = `ios-home${focused ? '' : ''}`
				} else if (routeName === 'ProfileTab') {
					iconName = `ios-person${focused ? '' : ''}`
				} else if (routeName === 'Search') {
					iconName = `ios-search`
				}
				return <IconComponent name={iconName} size={32} color={tintColor} />
			}
		}),
		tabBarOptions: {
			showLabel: false,
			activeTintColor: '#AE00E2',
			inactiveTintColor: '#A3A3A3'
		}
	}
)

export default createAppContainer(
	createSwitchNavigator({
		App: AppNavigator,
		Auth: TabNavigator,
		Settings: SettingsStack
	})
)
