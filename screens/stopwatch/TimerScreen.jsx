import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, { useState, useRef } from "react";
import formatTime from "minutes-seconds-milliseconds";
import tw from "twrnc";
import { TouchableHighlight } from "react-native-web";

const TimerScreen = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [timeLapse, setTimeLapse] = useState(null);
	const [laps, setLaps] = useState([]);

	const interval = useRef(null);

	const handleStart = () => {
		if (isRunning) {
			clearInterval(interval.current);
			interval.current = null;
			setIsRunning(false);
			return;
		}

		let startTime = new Date();

		if (!interval.current) {
			interval.current = setInterval(() => {
				let endTime = new Date();
				setTimeLapse(endTime.getTime() - startTime.getTime());
				setIsRunning(true);
			}, 30);
		}
	};

	const handleElapseTime = () => {
		const newElapseItem = {
			id: new Date(),
			elapse: timeLapse,
		};
		setLaps([newElapseItem, ...laps]);
	};

	return (
		<View style={styles.container}>
			<Text style={tw`text-4xl mb-4`}>{formatTime(timeLapse)}</Text>
			<View style={tw`flex-row justify-center w-full mb-10`}>
				<TouchableOpacity
					onPress={handleElapseTime}
					style={tw`w-24 h-24 rounded-full border justify-center items-center mr-10`}
				>
					<Text>Lap</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleStart}
					style={tw`w-24 h-24 rounded-full border justify-center items-center ${
						isRunning ? "border-red-500" : "border-green-500"
					}`}
				>
					{!isRunning && <Text>Start</Text>}
					{isRunning && <Text>Stop</Text>}
				</TouchableOpacity>
			</View>
			<FlatList
				style={tw`w-full`}
				data={laps}
				renderItem={({ item, index }) => (
					<View style={tw`flex-row bg-gray-200 mb-2 justify-center`}>
						<Text style={tw`text-2xl mr-10`}>{`Lap#${
							laps.length - index
						}`}</Text>
						<Text style={tw`text-2xl`}>
							{formatTime(item.elapse)}
						</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default TimerScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		fontSize: 20,
		marginTop: 50,
		width: "100%",
		paddingHorizontal: 50,
	},
});
