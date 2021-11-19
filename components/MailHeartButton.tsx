import React, { useState, useEffect } from "react";
import { VStack, Center, Spacer, HStack, Image, Box } from 'native-base';
import { StyleSheet, Pressable } from "react-native";
import { useAuth } from "../stores/useAuth";
import api from '../api';
import { useNavigation } from "@react-navigation/core";
import Heart from '../assets/svgs/heart.svg';
import HeartSolid from '../assets/svgs/heart-solid.svg';
import Envelope from '../assets/svgs/envelope.svg';

export function MailHeartButton(props: any) {
	const auth = useAuth()
	const user = auth.user
	const navigation = useNavigation()
	const [isLove, setIsLove] = useState(false)

	useEffect(() => {
		if(user.favourites != undefined) {
			for(let i = 0 ; i < user.favourites.length ; i ++) {
				if(user.favourites[i] === props.user.id) {
					setIsLove(true)
					break;
				}
			}
		}
	}, [])

	const onFavourite = () => {
		let data;
		if(!isLove) {
			if(user.favourites != undefined) {
				data = {
					id: user.id,
					newProfile: {...user, favourites: [...user.favourites, props.user.id]}
				};
			}
			else {
				data = {
					id: user.id,
					newProfile: {...user, favourites: [props.user.id]}
				};
			}
		}
		else {
			for(let i = 0 ; i < user.favourites.length ; i ++) {
				if(user.favourites[i] === props.user.id) {
					user.favourites.splice(i, 1)
					break;
				}
			}
			data = {
				id: user.id,
				newProfile: user
			};
		}
		setIsLove(!isLove)
		auth.updateAuth(data.newProfile)
		api.setFavourite(data);
  }

	const onEmail = () => {
		navigation.navigate("ChatScreen", {user: props.user})
	}

  return (
		<HStack style={styles.btnContainer}>
			<Spacer></Spacer>
			<Pressable onPress={onEmail}>
				<VStack
					width="10"
					height="10"
					borderRadius="300"
					backgroundColor="#ff2643"
				>
					<Spacer></Spacer>
					<Center>
						<Envelope width={15} height={15}/>
					</Center>
					<Spacer></Spacer>
				</VStack>
			</Pressable>
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
							{isLove ? <HeartSolid width={15} height={15}/> : <Heart width={15} height={15}/>  }
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

