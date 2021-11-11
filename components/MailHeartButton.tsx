import React, { useState } from "react";
import { VStack, Center, Spacer, HStack, Image, Box } from 'native-base';
import { StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SvgUri } from 'react-native-svg';

export function MailHeartButton(props: any) {
	const user = props.user
	const [heartIcon, setHeartIcon] = useState('https://firebasestorage.googleapis.com/v0/b/dog-owner-borrower.appspot.com/o/heart.svg?alt=media&token=a491494d-9de7-4f08-bba6-c5e4eb038326')
	const onFavourite = () => {
		if(heartIcon == 'https://firebasestorage.googleapis.com/v0/b/dog-owner-borrower.appspot.com/o/heart.svg?alt=media&token=a491494d-9de7-4f08-bba6-c5e4eb038326') {
			setHeartIcon('https://firebasestorage.googleapis.com/v0/b/dog-owner-borrower.appspot.com/o/heart-solid.svg?alt=media&token=7f67b6f3-b2d7-4f66-b80a-1fae2ad1972c')
		}
		else {
			setHeartIcon('https://firebasestorage.googleapis.com/v0/b/dog-owner-borrower.appspot.com/o/heart.svg?alt=media&token=a491494d-9de7-4f08-bba6-c5e4eb038326')
		}
  }

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
					<SvgUri
						width="65%"
						height="65%"
						uri="https://firebasestorage.googleapis.com/v0/b/dog-owner-borrower.appspot.com/o/envelope.svg?alt=media&token=fb9b6b98-e4c8-4647-940d-fff1d8997bb4"
					/>
				</Center>
				<Spacer></Spacer>
			</VStack>
			<Pressable onPress={onFavourite}>
				<VStack
					ml="3"
					width="10"
					height="10"
					borderRadius="300"
					backgroundColor="#ff2643"
				>
						<Spacer></Spacer>
						<Center>
								{/* <FontAwesome size={15} name="heart" color="white" /> */}
								<SvgUri
									width="65%"
									height="65%"
									uri={heartIcon}
								/>
						</Center>
						<Spacer></Spacer>
				</VStack>
			</Pressable>
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

