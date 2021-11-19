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
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../stores/useAuth";

export const PremiumItem = (props: any) => {
	const auth = useAuth();
  const item = props.item;
  const navigation = useNavigation();

	const onHandleItem = (name: string) => {
		switch(name) {
			case "Settings":
			break;
			case "FAQ":
				navigation.navigate("HelpScreen");
				break;
			case "Contact us":
				navigation.navigate("ContactScreen");
				break;
			case "Assistance veterinary 24h/24":
				break;
			case "Edit your profile":
				navigation.navigate("EditProfileScreen");
				break;
			case "Partner offers":
				break;
			case "Sign out":
				auth.signOut();
				break;
		}
	}

  return (
    <Box backgroundColor="white" m="5" mb="0">
      <Pressable onPress={() => onHandleItem(item.name)}>
        <HStack justifyContent="center" alignItems="center" mb="3">
          <FontAwesome size={25} name={item.icon} color={item.color} />
          <VStack ml="5">
            <Text
							mt="-1"
              color="dark.400"
              fontSize={15}
              fontWeight="bold"
              textColor={theme.colors.dark[200]}
            >
              {item.name}
            </Text>
            {item.text != "" && <Text color="dark.400">{item.text}</Text>}
          </VStack>
          <Spacer></Spacer>
        </HStack>
        {item.icon != "sign-out" && <Divider w="100%" />}
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
