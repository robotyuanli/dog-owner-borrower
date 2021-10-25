import React, { useState } from "react";
import {
  Text,
  TextArea,
  VStack,
  FormControl,
  Input,
  Button,
  Spacer,
	View,
	Center,
	theme,
	Image,
	HStack,
} from "native-base";
import { StyleSheet, FlatList } from "react-native";
import { ScreenBox } from "../components/ScreenBox";
import { FontAwesome } from "@expo/vector-icons";

export default function EditProfileScreen() {
	const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(6)).map((v, i) => {
      return { id: i, src: "https://wallpaperaccess.com/full/317501.jpg" };
    });
    setDataSource(items);
	}, []);
	
  return (
		<ScreenBox backColor="purple.100">
			<VStack flex="1">
				<HStack>
					<View>
						<Image
							size={100}
							resizeMode={"contain"}
							borderRadius={500}
							source={{
								uri: "https://wallpaperaccess.com/full/317501.jpg",
							}}
							alt="Alternate Text"
						/>
						<VStack
							width="5"
							height="5"
							borderRadius="300"
							backgroundColor="white"
							style={styles.editButton}
						>
							<Spacer></Spacer>
							<Center>
								<FontAwesome size={10} name="pencil" color={theme.colors.rose[500]} />
							</Center>
							<Spacer></Spacer>
						</VStack>
					</View>
					<VStack ml="5" flex="1">
						<Input
							type="text"
							placeholder="Name"
							fontSize={12}
							placeholderTextColor="grey"
						/>
						<Input
							mt="3"
							type="text"
							placeholder="Birthday"
							fontSize={12}
							placeholderTextColor="grey"
						/>
					</VStack>
				</HStack>
				<Text color="dark.400" mt="3">Your album</Text>
				<FlatList
					data={dataSource}
					style={{ margin: 0, flexGrow: 0 }}
					renderItem={({ item, index }) => (
						<View
							style={{
								flex: 1,
								marginRight: 8,
								marginTop: 8,
							}}
						>
							<Image style={styles.imageThumbnail} source={{ uri: item.src }} alt="album" />
						</View>
					)}
					numColumns={3}
				/>
				<Text color="dark.400" mt="3">About your doggie</Text>
				<TextArea
					h={20}
					fontSize={15}
					placeholderTextColor="grey"
				/>
				<Spacer></Spacer>
				<Button
					mt="5"
					mb="5"
					size="lg"
					rounded="20px"
					colorScheme="rose"
					_text={{ color: "white" }}
				>
					Save
				</Button>
			</VStack>
		</ScreenBox>
  );
}

const styles = StyleSheet.create({
  editButton: {
    position: "absolute",
    top: 15,
    right: 0,
	},
	imageThumbnail: {
    height: 100,
  },
});