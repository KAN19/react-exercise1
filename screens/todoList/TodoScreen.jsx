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
import TodoCard from "../../components/TotoCard";
import tw from "twrnc";
import ReactNativeModal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TodoScreen = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const [id, setId] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");

	const [data, setData] = useState([]);

	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const [isPickingFromDate, setIsPickingFromDate] = useState(false);
	const [isPickingToDate, setIsPickingToDate] = useState(false);

	const showFromDatePicker = () => {
		setDatePickerVisibility(true);
		setIsPickingFromDate(true);
	};

	const showToDatePicker = () => {
		setDatePickerVisibility(true);
		setIsPickingToDate(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
		setIsPickingToDate(false);
		setIsPickingFromDate(false);
	};

	const handleConfirm = (date) => {
		if (isPickingFromDate) {
			console.log("from date:" + date);
			setFromDate(date.toDateString());
		}
		if (isPickingToDate) {
			console.log("to date:" + date);
			setToDate(date.toDateString());
		}
		hideDatePicker();
	};

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleOnSaveData = () => {
		if (!id) {
			const newTaskItem = {
				id: new Date(),
				title: title,
				description: description,
				from_date: fromDate,
				to_date: toDate,
			};
			setData([newTaskItem, ...data]);
		} else {
			let index = data.findIndex((item) => item.id === id);
			const newTaskItem = {
				id: id,
				title: title,
				description: description,
				from_date: fromDate,
				to_date: toDate,
			};
			data.splice(index, 1, newTaskItem);
			console.log("update ne", data);
			setData(data);
		}

		updateModalData();
		toggleModal();
	};

	const onCheckTask = (id) => {
		const newDate = data.filter((item) => item?.id !== id);
		setData(newDate);
		// console.log(id);
	};

	const updateModalData = (selectedTask) => {
		if (!selectedTask) {
			setDescription("");
			setTitle("");
			setFromDate("");
			setToDate("");
			setId("");
		} else {
			setId(selectedTask?.id);
			setDescription(selectedTask?.description);
			setTitle(selectedTask?.title);
			setFromDate(selectedTask?.from_date);
			setToDate(selectedTask?.to_date);
		}
	};

	const onUpdateTask = (id) => {
		const selectedTask = data.find((item) => item.id === id);
		updateModalData(selectedTask);

		toggleModal();
	};

	return (
		<View style={tw`w-full`}>
			<Text style={tw`text-center mb-2`}>Todo screen</Text>
			<View>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<TodoCard
							id={item?.id}
							title={item?.title}
							fromDate={item?.from_date}
							toDate={item?.to_date}
							checkTaskEvent={onCheckTask}
							updateTaskEvent={onUpdateTask}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>

			<TouchableOpacity
				style={[
					tw`border py-1 px-2 text-center bg-green-500 self-end w-16`,
				]}
				onPress={toggleModal}
			>
				<Text style={tw`text-center`}>Add</Text>
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

					<View>
						<TouchableOpacity
							onPress={showFromDatePicker}
							style={tw`flex-row mb-2 items-center`}
						>
							<Text>From: </Text>
							<Text style={tw`bg-gray-200 p-1`}>
								Click to select
							</Text>
						</TouchableOpacity>
						<Text style={tw`bg-gray-200 p-1 mb-2`}>{fromDate}</Text>

						<TouchableOpacity
							onPress={showToDatePicker}
							style={tw`flex-row mb-2 items-center`}
						>
							<Text>To: </Text>
							<Text style={tw`bg-gray-200 p-1`}>
								Click to select
							</Text>
						</TouchableOpacity>
						<Text style={tw`bg-gray-200 p-1 mb-4`}>{toDate}</Text>
					</View>

					<DateTimePickerModal
						isVisible={isDatePickerVisible}
						mode="date"
						onConfirm={handleConfirm}
						onCancel={hideDatePicker}
					/>

					<Button title="Submit" onPress={handleOnSaveData} />
				</View>
			</ReactNativeModal>
		</View>
	);
};

export default TodoScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		flex: 1,
		width: "100%",
	},
	buttonAdd: {
		alignSelf: "flex-end",
	},
});
