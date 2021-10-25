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

export default function HelpScreen() {	
  return (
		<ScreenBox backColor="white">
			<Text color="dark.400" fontSize={20}>- How do you know dog is safe?</Text>
			<Text color="dark.400" fontSize={20} mt="5">- How do I get in room with a dog lover?</Text>
		</ScreenBox>
  );
}
