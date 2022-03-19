import {
	Text,
	View,
	TouchableOpacity,
	FlatList,
	TextInput,
} from "react-native";
import React, { Component } from "react";

const dataLogin = [
	{
		id: 0,
		userName: "nguyenkiet",
		passWord: "123",
	},
	{
		id: 1,
		userName: "nguyenkiet1",
		passWord: "12345678",
	},
];

export default class LoginScreen2 extends Component {
	constructor(props) {
		super(props);

		this.state = { userName: "", passWord: "", listLog: [] };
	}

	handleClickMe = () => {
		const logDate = this.getCurrentDateString();

		const isLegalCredential = dataLogin.some(
			(data) =>
				data.passWord === this.state.passWord &&
				data.userName === this.state.userName
		);

		const newLog = {
			userName: this.state.userName,
			passWord: this.state.passWord,
			status: isLegalCredential ? "Sucess" : "Failed",
			date: logDate,
		};

		const newLogList = [...this.state.listLog, newLog];
		this.setState({ listLog: newLogList });
		console.log(newLogList);
	};

	getCurrentDateString = () => {
		const today = new Date();
		const dateInString =
			" " +
			today.getHours() +
			":" +
			today.getMinutes() +
			":" +
			today.getSeconds() +
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate();

		return dateInString;
	};

	render() {
		return (
			<View>
				<Text>{this.props.title}</Text>

				<TextInput
					value={this.state.userName}
					onChangeText={(text) => this.setState({ userName: text })}
				/>
				<TextInput
					value={this.state.passWord}
					onChangeText={(text) => this.setState({ passWord: text })}
				/>
				<TouchableOpacity onPress={this.handleClickMe}>
					<Text
						style={{
							borderColor: "#c3c3c3",
							backgroundColor: "gray",
							padding: 4,
							textAlign: "center",
						}}
					>
						Click me
					</Text>
				</TouchableOpacity>

				<View style={{ flex: 1 }}>
					<FlatList
						data={this.state.listLog}
						renderItem={({ item }) => (
							<View>
								<Text>userName: {item.userName}</Text>
								<Text>passWord: {item.passWord}</Text>
								<Text>status: {item.status}</Text>
								<Text>logDate: {item.date}</Text>
							</View>
						)}
						keyExtractor={(item) => item.date}
					/>
				</View>
			</View>
		);
	}
}
