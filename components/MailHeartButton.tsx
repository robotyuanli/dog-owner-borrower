import * as React from 'react';
import { VStack, Center, Spacer, HStack, Switch, Box } from 'native-base';
import { StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function MailHeartButton(props: any) {
	
  return (
		<HStack style={styles.btnContainer}>
			<Spacer></Spacer>
			<VStack
				width="10"
				height="10"
				borderRadius="300"
				backgroundColor="#ff2643"
			>
				<Spacer></Spacer>
				<Center>
					<FontAwesome size={15} name="envelope" color="white" />
				</Center>
				<Spacer></Spacer>
			</VStack>
			<VStack
				ml="3"
				width="10"
				height="10"
				borderRadius="300"
				backgroundColor="#ff2643"
			>
				<Spacer></Spacer>
				<Center>
					<FontAwesome size={15} name="heart" color="white" />
				</Center>
				<Spacer></Spacer>
			</VStack>
			<Spacer></Spacer>
		</HStack>
	);
}

const styles = StyleSheet.create({
  btnContainer: {
    position: "absolute",
    bottom: 10,
  },
});

