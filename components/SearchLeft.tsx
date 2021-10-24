import { Center, Text, Icon, HStack, Spacer } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Pressable } from "react-native";

export const SearchLeft = () => {
	const navigation = useNavigation();
  return (
    <Center>
			<Pressable onPress={() => navigation.navigate("NavbarScreen")}>
				<HStack ml="3">
					<FontAwesome size={25} name="list-ul" color="white" />
					<Text fontWeight="bold" color="white" ml="1">
						(0)
					</Text>
				</HStack>
			</Pressable>
    </Center>
  );
};
