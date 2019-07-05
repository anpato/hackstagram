import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Input, Button, AccountCreated } from '../src/components/common'
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
			data: [],
			takenUsernames: [],
			takenEmails: [],
			isTaken: false,
			step: 1,
			timer: 10
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

	handleTimer = () => {
		setInterval(() => {
			this.setState({ timer: this.state.timer - 1 })
		}, 1000)
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
							error={isTaken}
							onChangeText={(email) => this.handleCheckEmails(email)}
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
							username={true}
							onChangeText={(username) => this.handleCheckUsername(username)}
							error={isTaken}
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
