import React from "react";
import {
  Box,
  theme,
  Text,
  HStack,
  Spacer,
  View,
  Center,
  VStack,
} from "native-base";
import { StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const MessageItem = (props: any) => {
  const item = props.item;

  return (
    <Box backgroundColor="white" mb="1">
      <HStack
				p="2"
        justifyContent="center"
        alignItems="center"
      >
				<FontAwesome size={40} name="user-circle" color={theme.colors.dark[500]} />
				<VStack>
					<Text ml="1" color="dark.400">
						{item.name}
					</Text>
					<Text ml="1" color="dark.600" fontSize={12}>
						{item.message}
					</Text>
				</VStack>
				<Spacer></Spacer>
				<Text color="dark.400">
					{item.date}
				</Text>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 200,
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
  },
});
