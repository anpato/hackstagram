import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Input, Button } from '../src/components/common'
import { Ionicons } from '@expo/vector-icons'
import { signup } from '../src/services/apiService'
import CheckMark from '../src/assets/Checkmark.png'
export default class CreateAccount extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: '',
			confirmPassword: '',
			skill: '',
			skills: [],
			data: [],
			skillsData: [],
			step: 1
		}
	}

	createData = () => {
		const { firstName, lastName, email, username, skills } = this.state
		let userInfo = [
			{ key: firstName },
			{ key: lastName },
			{ key: email },
			{ key: username }
		]

		return skills.map((skill) => {
			userInfo.push({ key: skill })
			return this.setState({
				data: [...this.state.data, ...userInfo]
			})
		})
	}

	handleSignUp = async () => {
		const {
			username,
			firstName,
			lastName,
			email,
			password,
			skills
		} = this.state
		const data = {
			username,
			password,
			firstName,
			lastName,
			email,
			skills
		}
		try {
			const req = await signup(data)
			if (req) {
				this.setState({ step: this.state.step + 1 })
			}
		} catch (error) {
			throw error
		}
	}

	nextStep = () => {
		this.setState({ step: this.state.step + 1 })
	}
	prevStep = () => {
		this.setState({ step: this.state.step - 1 })
	}

	render() {
		const {
			step,
			firstName,
			lastName,
			email,
			username,
			password,
			confirmPassword,
			skill,
			skills
		} = this.state
		switch (step) {
			case 1:
				return (
					<LinearGradient
						colors={['#3E0072', '#AE00E2']}
						style={styles.gradient}>
						<Input
							placeholder="First Name"
							value={firstName}
							onChangeText={(firstName) => this.setState({ firstName })}
						/>
						<Input
							placeholder="Last Name"
							value={lastName}
							onChangeText={(lastName) => this.setState({ lastName })}
						/>
						<Input
							placeholder="Email"
							value={email}
							onChangeText={(email) => this.setState({ email })}
						/>

						<Button
							title="Next"
							onPress={this.nextStep}
							disabled={firstName && lastName && email ? false : true}
						/>
						<Button
							title="Go Back"
							onPress={() => this.props.navigation.goBack()}
						/>
					</LinearGradient>
				)
			case 2:
				return (
					<LinearGradient
						colors={['#3E0072', '#AE00E2']}
						style={styles.gradient}>
						<Input
							placeholder="Joe_Sho"
							value={username}
							onChangeText={(username) => this.setState({ username })}
						/>
						<Input
							secureTextEntry={true}
							placeholder="Password"
							value={password}
							onChangeText={(password) => this.setState({ password })}
						/>
						<Input
							placeholder="Confirm Password"
							secureTextEntry={true}
							value={confirmPassword}
							onChangeText={(confirmPassword) =>
								this.setState({ confirmPassword })
							}
						/>
						<Button
							title="Next"
							onPress={this.nextStep}
							disabled={username && password === confirmPassword ? false : true}
						/>
						<Button title="Back" onPress={this.prevStep} />
					</LinearGradient>
				)
			case 3:
				return (
					<LinearGradient
						colors={['#3E0072', '#AE00E2']}
						style={styles.gradient}>
						<Input
							placeholder="Languages"
							value={skill}
							onChangeText={(skill) => this.setState({ skill })}
							name="ios-add-circle-outline"
							disabled={skill ? false : true}
							onPress={() =>
								this.setState({
									skills: [skill, ...this.state.skills],
									skill: ''
								})
							}
						/>
						{skills
							? skills.map((skill, index) => {
									return (
										<Input
											key={index}
											placeholder="Languages"
											value={skill}
											onChangeText={(skill) => this.setState({ skill })}
											name="ios-add-circle-outline"
											disabled={skill ? false : true}
											onPress={() =>
												this.setState({
													skills: [skill, ...this.state.skills],
													skill: ''
												})
											}
										/>
									)
							  })
							: null}
						<Button
							title="Next"
							onPress={() => {
								this.nextStep()
								this.createData()
							}}
						/>
						<Button title="Back" onPress={this.prevStep} />
					</LinearGradient>
				)
			case 4:
				return (
					<LinearGradient
						contentContainerStyle={{ flexGrow: 1 }}
						colors={['#3E0072', '#AE00E2']}
						style={styles.gradient}>
						<View style={styles.listContainer}>
							<FlatList
								data={this.state.data}
								renderItem={({ item }) => (
									<Text style={styles.verifyText} key={item.key}>
										{item.key}
									</Text>
								)}
							/>
						</View>
						<Button title="Confirm" onPress={this.handleSignUp} />
						<Button title="Go Back" onPress={this.prevStep} />
					</LinearGradient>
				)
			case 5:
				return (
					<LinearGradient
						contentContainerStyle={{ flexGrow: 1 }}
						colors={['#3E0072', '#AE00E2']}
						style={styles.gradient}>
						<Image source={CheckMark} />
						<Text />
					</LinearGradient>
				)
			default:
				return <View />
		}
	}
}

const styles = {
	gradient: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	listContainer: {
		height: 300,
		width: 400,
		alignSelf: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	verifyText: {
		color: '#f8f8f8',
		fontSize: 18,
		borderBottomWidth: 2,
		borderBottomColor: '#f8f8f8'
	}
}
