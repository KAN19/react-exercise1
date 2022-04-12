import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import LoginScreen2 from "./screens/LoginScreen2";
import TimerScreen from "./screens/stopwatch/TimerScreen";
import React from "react";
import TodoScreen from "./screens/todoList/TodoScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import TimerScreen2 from "./screens/stopwatch/TimerScreen2";

export default function App() {
	return (
		<View style={styles.container}>
			<TodoScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		flex: 1,
		marginHorizontal: 20,
		marginTop: 50,
	},
});
