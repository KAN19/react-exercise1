import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const TotoCard = () => {
	return (
		<TouchableOpacity
			onPress={() => console.log("card pressed")}
			style={tw`w-full border flex-row justify-between items-center px-4 py-2 mb-4`}
		>
			<View>
				<Text>Title </Text>
				<View style={tw`flex-row`}>
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
			<TouchableOpacity onPress={() => console.log("check pressed")}>
				<View style={tw`h-4 w-4 border rounded-full`}></View>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default TotoCard;

const styles = StyleSheet.create({});
