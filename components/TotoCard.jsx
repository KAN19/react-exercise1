import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const TotoCard = ({
	id,
	title,
	checkTaskEvent,
	updateTaskEvent,
	fromDate,
	toDate,
}) => {
	const handleCheckTask = () => {
		if (checkTaskEvent) {
			checkTaskEvent(id);
		}
	};

	const handleUpdateTask = () => {
		if (updateTaskEvent) {
			updateTaskEvent(id);
		}
	};

	return (
		<TouchableOpacity
			onPress={handleUpdateTask}
			style={tw`border flex-row justify-between items-center px-4 py-2 mb-4`}
		>
			<View>
				<Text style={tw`font-bold`}>{title} </Text>
				<View>
					<View style={tw`mr-2 flex-row`}>
						<Text>From: </Text>
						<Text>{fromDate} </Text>
					</View>
					<View style={tw`mr-2 flex-row`}>
						<Text>To: </Text>
						<Text>{toDate} </Text>
					</View>
				</View>
			</View>
			<TouchableOpacity onPress={handleCheckTask}>
				<Text style={tw`h-8 w-8 border rounded-full`}></Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default TotoCard;

const styles = StyleSheet.create({});
