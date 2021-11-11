import { theme, Box, Image, Spacer, VStack, Center } from "native-base";
import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar } from 'react-native-elements'
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../stores/useAuth";

const styles = StyleSheet.create({
  editButton: {
    position: "absolute",
    top: 15,
    left: -5,
  },
});

export const SearchRight = () => {
	const navigation = useNavigation();
	const auth = useAuth()
	const avatar = auth.user.avatar
	
  return (
    <Box mr="3">
			<Pressable onPress={() => navigation.navigate("EditProfileScreen")}>
				<Avatar
					rounded
					source={{
						uri: avatar,
					}}
				/>
				<VStack
					width="4"
					height="4"
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
			</Pressable>
    </Box>
  );
};
