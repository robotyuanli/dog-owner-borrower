import { theme, Box, View, Spacer, VStack, Center } from "native-base";
import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Edit from '../assets/svgs/edit.svg';
import { Avatar } from 'react-native-elements'
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../stores/useAuth";

const styles = StyleSheet.create({
  editButton: {
    position: "absolute",
    top: 30,
    left: -2,
  },
});

export const HeaderRight = () => {
	const navigation = useNavigation();
	const auth = useAuth()
	const avatar = auth.user.avatar
	
  return (
    <Box mr="3">
			<Pressable onPress={() => navigation.navigate("EditProfileScreen")}>
				<Avatar
					rounded
					size={52}
					source={{
						uri: avatar,
					}}
				/>
				<View style={styles.editButton}>
					<Edit />
				</View>
			</Pressable>
    </Box>
  );
};
