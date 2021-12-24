import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { Text, Box, HStack, Spacer, theme, Slider, View, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import MapView from 'react-native-maps';
import { useRoute } from "@react-navigation/core";
import { MailHeartButton } from "../components/MailHeartButton";

export default function ProfileScreen() {
	const route = useRoute()
	const user = route.params.user

  return (
		<Box backgroundColor="purple.100" h="100%">
			<Image style={styles.imageThumbnail} source={{ uri: user.avatar }} />
			<View p="5">
				<Text color="dark.400" fontSize={18}>{user.name}</Text>
				<HStack mt="3" mb="3" justifyContent="center" alignItems="center">
					<FontAwesome name="upload" color={theme.colors.green[600]} />
					<Text color="dark.400" ml="1" mr="10">Valide</Text>
					<FontAwesome name="star" color={theme.colors.yellow[400]} />
					<Text color="dark.400" ml="1">5 (1 review)</Text>
					<Spacer></Spacer>
				</HStack>
				<Text color="dark.400">
					Passionate about dogs for a long time, I myself grew up with a Collie for 13 years, I love taking care of animals. I will know how to ensure the safety of your animals while having fun! It is a real pleasure for me to spend time with them. I am available weekday evenings, weekends / holidays!
				</Text>
			</View>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		</Box>
	);
}

const styles = StyleSheet.create({
  imageThumbnail: {
    height: 300,
	},
	map: {
		flex: 1,
	}
});
