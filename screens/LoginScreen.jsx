import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, { useState } from "react";

const dateLogin = [
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

const LoginScreen = ({ title }) => {
	const [userName, setUserName] = useState("");
	const [passWord, setPassWord] = useState("");

	const [logList, setLogList] = useState([]);

	const handleClickMe = () => {
		const logDate = getCurrentDateString();

		const isLegalCredential = dateLogin.some(
			(data) => data.passWord === passWord && data.userName === userName
		);

		const newLog = {
			userName: userName,
			passWord: passWord,
			status: isLegalCredential ? "Sucess" : "Failed",
			date: logDate,
		};

		setLogList((logList) => [...logList, newLog]);
		// console.log(newLogList);
	};

	const getCurrentDateString = () => {
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

	return (
		<View>
			<Text>{title}</Text>

			<TextInput
				value={userName}
				onChangeText={(text) => setUserName(text)}
			/>
			<TextInput
				value={passWord}
				onChangeText={(text) => setPassWord(text)}
			/>
			<TouchableOpacity onPress={handleClickMe}>
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
					data={logList}
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
};

export default LoginScreen;
