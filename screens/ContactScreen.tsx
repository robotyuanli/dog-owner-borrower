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
import { ScreenBox } from "../components/ScreenBox";
import { FontAwesome } from "@expo/vector-icons";

export default function ContactScreen() {	
  return (
		<ScreenBox backColor="white">
			<HStack mt="5" justifyContent="center" alignItems="center">
				<FontAwesome name="envelope" size={40} color={theme.colors.dark[600]} />
				<Text color="dark.400" fontSize={20} ml="10">EMAIL</Text>
			</HStack>
			<HStack mt="10" justifyContent="center" alignItems="center">
				<FontAwesome name="phone" size={40} color={theme.colors.dark[600]} />
				<Text color="dark.400" fontSize={20} ml="10">PHONE</Text>
			</HStack>
		</ScreenBox>
  );
}
