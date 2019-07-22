import React from 'react'
import { TouchableOpacity, AsyncStorage } from 'react-native'
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createSwitchNavigator
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import Home from './screens/Home'
import CreateAccount from './screens/CreateAccount'
import SignIn from './screens/SignIn'
import Posts from './screens/Posts'
import Profile from './screens/Profile'
import Settings from './screens/Settings'
import Search from './screens/Search'
import PostCard from './screens/PostCard'
import Suggested from './screens/Suggested'
import { Platform } from '@unimodules/core'
import SplashScreen from './screens/SplashScreen'

const AppNavigator = createStackNavigator(
	{
		Splash: SplashScreen,
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
		SearchHome: Search
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
)

const SuggestedStack = createStackNavigator(
	{
		SuggestedHome: Suggested
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
		PostHome: Posts,
		OnePost: PostCard
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
		PostTab: PostStack,
		SearchTab: SearchStack,
		SuggestedTab: SuggestedStack,
		ProfileTab: ProfileStack
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let IconComponent = Ionicons
				let iconName
				switch (routeName) {
					case 'PostTab':
						iconName =
							Platform.os === 'ios'
								? `ios-home${focused ? '' : ''}`
								: `md-home${focused ? '' : ''}`
						break
					case 'SearchTab':
						iconName =
							Platform.os === 'ios'
								? `ios-search${focused ? '' : ''}`
								: `md-search${focused ? '' : ''}`
						break
					case 'SuggestedTab':
						iconName =
							Platform.os === 'ios'
								? `ios-people${focused ? '' : ''}`
								: `md-people${focused ? '' : ''}`
						break
					case 'ProfileTab':
						iconName =
							Platform.os === 'ios'
								? `ios-person${focused ? '' : ''}`
								: `md-person${focused ? '' : ''}`
						break
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
