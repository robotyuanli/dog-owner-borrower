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
import { StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { MailHeartButton } from "./MailHeartButton";

export const ImageBox = (props: any) => {
	const item = props.item;
	const navigation = useNavigation();

  return (
    <Box style={styles.imageBox}>
			{item?.name != "empty" && 
				<Pressable
					onPress={() => navigation.navigate("ProfileScreen", {user: item.data()})}
				>
					<HStack
						backgroundColor="white"
						justifyContent="center"
						alignItems="center"
					>
						<Text ml="1" color="dark.400">
							Clotilde, 2 km
						</Text>
						<Spacer></Spacer>
						<FontAwesome name="star" color={theme.colors.orange[600]} />
						<Text ml="1" mr="1" color="dark.400">
							5
						</Text>
					</HStack>
					<View>
						<Image style={styles.imageThumbnail} source={{ uri: item.data().avatar }} />
						<MailHeartButton user={item.data()}/>
					</View>
					<HStack
					backgroundColor="white"
					justifyContent="center"
					alignItems="center"
				>
					<View ml="1">
						<FontAwesome name="paw" color={theme.colors.yellow[300]} />
					</View>
					<Text ml="1" color="yellow.300">
						Premium
					</Text>
					<Spacer></Spacer>
					<FontAwesome name="upload" color={theme.colors.green[600]} />
					<Text ml="1" mr="1" color="dark.400">
						Valide
					</Text>
				</HStack>
				</Pressable>
			}
		</Box>
  );
};

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 200,
  },
	imageBox: {
	},
});
