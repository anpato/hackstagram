import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home'
import CreateAccount from './screens/CreateAccount'

const AppNavigator = createStackNavigator({
	Home: Home,
	CreateAccount: CreateAccount
})

export default createAppContainer(AppNavigator)
