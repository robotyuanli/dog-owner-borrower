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
import { useNavigation } from "@react-navigation/core";
import Star from '../assets/svgs/star.svg';
import Valid from '../assets/svgs/valid.svg';
import Favourite from '../assets/svgs/favourite.svg';
import Message from '../assets/svgs/message.svg';
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
					<View
						backgroundColor="white"
						style={{backgroundColor: "#F7F5F5"}}
					>
						<Text ml="1" color="#474747" fontWeight="bold">
							Clotilde, 2 miles
						</Text>
						<Spacer></Spacer>
					</View>
					<View>
						<Image style={styles.imageThumbnail} source={{ uri: item.data().avatar }} />
						<HStack style={{position: "absolute", top: 0}}>
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</HStack>
						<HStack style={{position: "absolute", bottom: 5, right: 5, backgroundColor: "#F7F5F5", paddingLeft: 5}} alignItems="center" >
							<Valid />
							<Text ml="1" mr="3" color="#979EA6" fontWeight="bold" fontSize="10">
								Valid
							</Text>
						</HStack>
						<VStack style={{position: "absolute", top: 0, right: 0}}>
							<Favourite />
							<Message />
						</VStack>
						{/* <MailHeartButton user={item.data()}/> */}
					</View>
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
