import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, { Component } from "react";
import formatTime from "minutes-seconds-milliseconds";
import tw from "twrnc";

export class TimerScreen2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isRunning: false,
			timeLapse: "",
			laps: [],
			interval: null,
		};
	}

	handleStart = () => {
		if (this.state.isRunning) {
			clearInterval(this.state.interval);
			this.setState({ isRunning: false });
			return;
		}

		let startTime = new Date();

		this.state.interval = setInterval(() => {
			let endTime = new Date();
			this.setState({
				timeLapse: endTime.getTime() - startTime.getTime(),
				isRunning: true,
			});
		}, 30);
	};

	handleElapseTime = () => {
		const newElapseItem = {
			id: new Date(),
			elapse: this.state.timeLapse,
		};
		this.setState({ laps: [newElapseItem, ...this.state.laps] });
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={tw`text-4xl mb-4`}>
					{formatTime(this.state.timeLapse)}
				</Text>
				<View style={tw`flex-row justify-center w-full mb-10`}>
					<TouchableOpacity
						onPress={this.handleElapseTime}
						style={tw`w-24 h-24 rounded-full border justify-center items-center mr-10`}
					>
						<Text>Lap</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.handleStart}
						style={tw`w-24 h-24 rounded-full border justify-center items-center ${
							this.isRunning
								? "border-red-500"
								: "border-green-500"
						}`}
					>
						{!this.state.isRunning && <Text>Start</Text>}
						{this.state.isRunning && <Text>Stop</Text>}
					</TouchableOpacity>
				</View>
				<FlatList
					style={tw`w-full`}
					data={this.state.laps}
					renderItem={({ item, index }) => (
						<View
							style={tw`flex-row bg-gray-200 mb-2 justify-center`}
						>
							<Text style={tw`text-2xl mr-10`}>{`Lap#${
								this.state.laps.length - index
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
	}
}

export default TimerScreen2;

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
