import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Button,
	TextInput,
} from "react-native";
import React, { useState } from "react";
import TodoCard from "../components/TotoCard";
import tw from "twrnc";
import ReactNativeModal from "react-native-modal";

const TodoScreen = () => {
	const data2 = [
		{
			id: 1,
			title: "Hello",
			description: "Description",
			start: "dd/mm/yyy",
			end: "dd/mm/yyyy",
		},
		{
			id: 2,
			title: "Hell 22",
			description: "Description",
			start: "dd/mm/yyy",
			end: "dd/mm/yyyy",
		},
	];

	const [isModalVisible, setIsModalVisible] = useState(false);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [first, setfirst] = useState("");

	const [data, setData] = useState([]);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleOnSaveData = () => {
		const newTaskItem = {};
		setDescription("");
		setTitle("");
		toggleModal();
	};

	return (
		<View style={styles.container}>
			<View style={tw`text-center mb-2`}>Todo screen</View>
			<FlatList
				data={data2}
				renderItem={TodoCard}
				keyExtractor={(item) => item.id}
			/>
			<TouchableOpacity
				style={[styles.buttonAdd, tw`border py-1 px-2 text-center`]}
				onPress={toggleModal}
			>
				<Text>Add</Text>
			</TouchableOpacity>

			<ReactNativeModal isVisible={isModalVisible}>
				<View style={tw`bg-white p-4`}>
					<Text>Add task</Text>

					<TextInput
						style={tw`border p-1 px-2 mb-2 `}
						placeholder="Task Title"
						value={title}
						onChangeText={(text) => setTitle(text)}
					/>
					<TextInput
						style={tw`border p-1 px-2 mb-2 `}
						placeholder="Task description "
						multiline
						numberOfLines={4}
						value={description}
						onChangeText={(text) => setDescription(text)}
					/>

					<Button title="Hide modal" onPress={handleOnSaveData} />
				</View>
			</ReactNativeModal>
		</View>
	);
};

export default TodoScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
	buttonAdd: {
		alignSelf: "flex-end",
	},
});
