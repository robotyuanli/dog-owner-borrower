import React from "react";
import {
  Box,
  theme,
  Text,
  HStack,
  Spacer,
  View,
  Divider,
  VStack,
} from "native-base";
import { Avatar } from 'react-native-elements'
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { PoppinsText } from "../components/PoppinsText";

export const MessageItem = (props: any) => {
  const item = props.item;

  return (
    <Box backgroundColor="white" mb="1">
			<Divider />
      <HStack
				p="4"
        justifyContent="center"
        alignItems="center"
      >
				<Avatar
					rounded
					size={40}
					source={{
						uri: item.data().avatar,
					}}
				/>
				<VStack ml="3">
					<PoppinsText fontSize={15} color="#2B2B2B" ml="1">
						{item.data().name}
					</PoppinsText>
					<PoppinsText fontSize={12} color="#4F4F4F" ml="1">
						Hey! How’s your dog?
					</PoppinsText>
				</VStack>
				<Spacer></Spacer>
				<Text color="dark.400">
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
