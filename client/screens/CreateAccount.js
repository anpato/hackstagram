import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {
	Input,
	Button,
	AccountCreated,
	CardSection,
	Card
} from '../src/components/common'
import { signup, getUsernames, getEmails } from '../src/services/apiService'

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
			data: {},
			takenUsernames: [],
			takenEmails: [],
			isTaken: false,
			step: 1,
			timer: 5
		}
	}

	async componentDidMount() {
		try {
			const takenUsernames = await getUsernames()
			const takenEmails = await getEmails()
			this.setState({ takenUsernames, takenEmails })
		} catch (error) {
			throw error
		}
	}

	handleCheckUsername = (username) => {
		const { takenUsernames } = this.state
		this.setState({ username })
		if (takenUsernames.includes(username.toLowerCase())) {
			this.setState({ isTaken: true })
		}
		if (!takenUsernames.includes(username.toLowerCase())) {
			this.setState({ isTaken: false })
		}
	}

	handleCheckEmails = (email) => {
		const { takenEmails } = this.state
		this.setState({ email })
		if (takenEmails.includes(email.toLowerCase())) {
			this.setState({ isTaken: true })
		}
		if (!takenEmails.includes(email.toLowerCase())) {
			this.setState({ isTaken: false })
		}
	}

	verifyData = () => {
		this.nextStep()
		const { firstName, lastName, email, username } = this.state
		let userInfo = [
			{ key: firstName },
			{ key: lastName },
			{ key: email },
			{ key: username }
		]
		this.setState({ data: userInfo })
	}

	handleTimer = () => {
		setInterval(() => {
			this.setState({ timer: this.state.timer - 1 })
		}, 1000)
	}

	handleSignUp = async () => {
		try {
			const { username, email, firstName, lastName, password } = this.state
			const req = await signup({
				username,
				email,
				firstName,
				lastName,
				password
			})
			if (req) {
				this.nextStep()
				this.handleTimer()
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

	renderItem = (data) => {
		return (
			<CardSection style={styles.items}>
				<Text>{data.item.key}</Text>
			</CardSection>
		)
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
			skills,
			data,
			isTaken
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
							email={true}
							onChangeText={(email) => this.handleCheckEmails(email)}
							error={isTaken}
						/>
						<Button
							title="Next"
							onPress={this.nextStep}
							disabled={
								firstName &&
								lastName &&
								email &&
								email.includes(('@' && '.com') || '.net' || '.dev' || '.io') &&
								isTaken !== true
									? false
									: true
							}
						/>
						<Button
							title="Back"
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
							placeholder="Username"
							value={username}
							onChangeText={(username) => this.setState({ username })}
						/>
						<Input
							placeholder="Password"
							value={password}
							secureTextEntry={true}
							onChangeText={(password) => this.setState({ password })}
						/>
						<Input
							placeholder="Confirm Password"
							value={confirmPassword}
							onChangeText={(confirmPassword) =>
								this.setState({ confirmPassword })
							}
							secureTextEntry={true}
						/>
						<Button
							title="Next"
							onPress={this.verifyData}
							disabled={
								username &&
								password &&
								password === confirmPassword &&
								isTaken !== true
									? false
									: true
							}
						/>
						<Button title="Back" onPress={this.prevStep} />
					</LinearGradient>
				)
			case 3:
				return (
					<LinearGradient
						colors={['#3E0072', '#AE00E2']}
						style={styles.gradient}>
						<Card>
							{data
								? data.map((data, index) => {
										return (
											<CardSection key={index}>
												<Text style={styles.item}>{data.key}</Text>
											</CardSection>
										)
								  })
								: null}
						</Card>
						<Button title="Confirm" onPress={this.handleSignUp} />
						<Button title="Back" onPress={this.prevStep} />
					</LinearGradient>
				)
			case 4:
				return (
					<AccountCreated
						timer={this.state.timer}
						navigation={this.props.navigation}
					/>
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
		height: 100,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	verifyText: {
		color: '#f8f8f8',
		fontSize: 18,
		borderBottomWidth: 2,
		borderBottomColor: '#f8f8f8'
	},
	items: {
		textAlign: 'center',
		justifyContent: 'center',
		alignSelf: 'center'
	}
}
