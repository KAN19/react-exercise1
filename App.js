import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import LoginScreen2 from "./screens/LoginScreen2";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Title here</Text>
			{/* <LoginScreen title={"Hello Login Screen"} /> */}
			<LoginScreen2 title="login 2 ne" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
});
