import React from 'react'
import { TouchableOpacity } from 'react-native'
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

const styles = {
	iconCamera: {
		marginLeft: 20,
		color: '#AE00E2'
	},
	iconSettings: {
		marginRight: 20,
		color: '#AE00E2'
	}
}
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
		defaultNavigationOptions: {
			title: 'App',
			headerStyle: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.3
			},
			headerLeft: (
				<TouchableOpacity>
					<Ionicons name="ios-camera" size={32} style={styles.iconCamera} />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity>
					<Ionicons name="ios-settings" size={32} style={styles.iconSettings} />
				</TouchableOpacity>
			)
		}
	}
)

const ProfileStack = createStackNavigator(
	{
		Profile: Profile
	},
	{
		defaultNavigationOptions: {
			title: 'App',
			headerStyle: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.3
			},
			headerLeft: (
				<TouchableOpacity>
					<Ionicons name="ios-camera" size={32} style={styles.iconCamera} />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity>
					<Ionicons name="ios-settings" size={32} style={styles.iconSettings} />
				</TouchableOpacity>
			)
		}
	}
)

const SearchStack = createStackNavigator(
	{
		Search: Search
	},
	{
		defaultNavigationOptions: {
			title: 'App',
			headerStyle: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.3
			},
			headerLeft: (
				<TouchableOpacity>
					<Ionicons name="ios-camera" size={32} style={styles.iconCamera} />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity>
					<Ionicons name="ios-settings" size={32} style={styles.iconSettings} />
				</TouchableOpacity>
			)
		}
	}
)

const PostStack = createStackNavigator(
	{
		Post: Posts
	},
	{
		defaultNavigationOptions: {
			title: 'App',
			headerStyle: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.3
			},
			headerLeft: (
				<TouchableOpacity>
					<Ionicons name="ios-camera" size={32} style={styles.iconCamera} />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity>
					<Ionicons name="ios-settings" size={32} style={styles.iconSettings} />
				</TouchableOpacity>
			)
		}
	}
)

const TabNavigator = createBottomTabNavigator(
	{
		Post: PostStack,
		Search: SearchStack,
		Profile: ProfileStack
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let IconComponent = Ionicons
				let iconName
				if (routeName === 'Post') {
					iconName = `ios-home${focused ? '' : ''}`
				} else if (routeName === 'Profile') {
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
