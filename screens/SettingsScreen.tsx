import { Box, View, Image, theme, VStack, HStack } from "native-base";
import * as React from "react";
import { FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../stores/useAuth";
import { SettingsItem } from "../components/SettingsItem";
import { Avatar } from 'react-native-elements'
import { PoppinsText } from "../components/PoppinsText";
import Location from '../assets/svgs/location.svg';
import SignoutIcon from '../assets/svgs/signout.svg';

const items = [
  {
    name: "Settings",
    text: "Change your setting",
    color: theme.colors.orange[600],
  },
  {
    name: "FAQ",
    text: "Consult the online help",
		color: theme.colors.secondary[700],
  },
  {
    name: "Contact us",
    text: "Have a question? Contact us",
		color: theme.colors.primary[500],
  },
  {
    name: "Edit Profile",
    text: "Change your information",
		color: theme.colors.rose[500],
  }
];

export default function SettingsScreen() {
	const auth = useAuth()
	const avatar = auth.user.avatar
  const navigation = useNavigation();
  navigation.setOptions({ tabBarVisible: false });

	const signOut = () => {
		auth.signOut()
	}

  return (
    <Box backgroundColor="white" h="100%">
      <VStack
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
					rounded
					source={{
						uri: avatar,
					}}
					size="xlarge"
				/>
				<PoppinsText fontSize={34} color="#474747" fontWeight="bold" mt="2" mb="2">
					{auth.user.name}
        </PoppinsText>
				<HStack justifyContent="center" alignItems="center">
					<Location />
					<PoppinsText fontSize={17} color="#A1A1A2" ml="2">
						China, ShenYang
					</PoppinsText>
				</HStack>
      </VStack>
      <FlatList
        data={items}
        renderItem={({ item }) => <SettingsItem item={item} />}
      />
			<Pressable onPress={signOut} style={{width: "100%", height: 58}}>
				<HStack backgroundColor="#161616" borderRadius={10} flex={1} height={58} ml={5} mr={5} justifyContent="center" alignItems="center">
					<PoppinsText fontSize={17} color="white" mr="2">
						Sign out
					</PoppinsText>
					<SignoutIcon />
				</HStack>
			</Pressable>
    </Box>
  );
}
