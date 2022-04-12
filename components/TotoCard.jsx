import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const TotoCard = ({ title, clickEvent }) => {
	const handleCheckTask = () => {
		if (clickEvent) {
			clickEvent();
		}
	};

	return (
		<TouchableOpacity
			onPress={() => console.log("card pressed")}
			style={tw`border flex-row justify-between items-center px-4 py-2 mb-4`}
		>
			<View>
				<Text>{title} </Text>
				<View>
					<View style={tw`mr-2 flex-row`}>
						<Text>From: </Text>
						<Text>dd/mm/yyy </Text>
					</View>
					<View style={tw`mr-2 flex-row`}>
						<Text>To: </Text>
						<Text>dd/mm/yyy </Text>
					</View>
				</View>
			</View>
			<TouchableOpacity onPress={handleCheckTask}>
				<Text style={tw`h-4 w-4 border rounded-full`}></Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default TotoCard;

const styles = StyleSheet.create({});
