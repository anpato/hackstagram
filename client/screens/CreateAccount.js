import React, { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Input, Button } from '../src/components/common'
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
			skills: [],
			step: 1
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
						<Button title="Next" onPress={this.nextStep} />
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
							onChangeText={(firstName) => this.setState({ username })}
						/>
						<Input
							secureTextEntry={true}
							placeholder="Password"
							value={password}
							onChangeText={(password) => this.setState({ password })}
						/>
						<Input
							placeholder="Confirm Password"
							value={confirmPassword}
							onChangeText={(confirmPassword) =>
								this.setState({ confirmPassword })
							}
						/>
						<Button title="Next" onPress={this.nextStep} />
						<Button title="Back" onPress={this.prevStep} />
					</LinearGradient>
				)
			case 3:
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
						<Button title="Next" onPress={this.nextStep} />
						<Button title="Back" onPress={this.prevStep} />
					</LinearGradient>
				)
			case 4:
				return (
					<LinearGradient
						colors={['#3E0072', '#AE00E2']}
						style={styles.gradient}
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
	}
}
