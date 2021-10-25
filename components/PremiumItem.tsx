import React from "react";
import {
  Box,
  theme,
  Text,
  HStack,
  Spacer,
  View,
  Button,
  VStack,
	Divider,
} from "native-base";
import { StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ItemProps} from "../types";
import { useNavigation } from "@react-navigation/core";

export const PremiumItem = (props: ItemProps) => {
	const item = props.item;
	const navigation = useNavigation();

  return (
    <Box backgroundColor="white" m="5" mb="0">
			<Pressable onPress={() => navigation.navigate(item.path)}>
				<HStack
					mb="3"
					justifyContent="center"
					alignItems="center"
				>
					<FontAwesome size={25} name={item.icon} color={item.color} />
					{item.icon == "paw" && 
						<Button
							ml="5"
							mr="5"
							flexGrow="1"
							size="lg"
							rounded="20px"
							bgColor={item.color}
							_text={{ color: "white" }}
						>
							{item.name}
						</Button>
					}
					{item.icon != "paw" && 
						<>
							<VStack ml="5">
								<Text color="dark.400" fontSize={15} fontWeight="bold" textColor={theme.colors.dark[200]}>
									{item.name}
								</Text>
								<Text color="dark.400">
									{item.text}
								</Text>
							</VStack>
							<Spacer></Spacer>
						</>
					}
				</HStack>
				{item.icon != "gift" && <Divider w="100%" />}
			</Pressable>
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
