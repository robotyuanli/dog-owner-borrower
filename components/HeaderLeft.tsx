import { Center, Text, Icon, HStack, View } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import Menu from '../assets/svgs/menu.svg';
import { Pressable } from "react-native";

export const HeaderLeft = () => {
	const navigation = useNavigation();
  return (
		<View ml="3">
			<Center>
				<Pressable onPress={() => navigation.navigate("NavbarScreen")}>
					<Menu />
				</Pressable>
			</Center>
		</View>
  );
};
