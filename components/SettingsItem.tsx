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
import { StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import SettingsIcon from '../assets/svgs/settings-item.svg';
import FAQIcon from '../assets/svgs/faq.svg';
import ContactUSIcon from '../assets/svgs/contact.svg';
import EditProfileIcon from '../assets/svgs/edit-profile.svg';
import { PoppinsText } from "../components/PoppinsText";

export const SettingsItem = (props: any) => {
  const item = props.item;
  const navigation = useNavigation();

	const onHandleItem = (name: string) => {
		switch(name) {
			case "Settings":
			break;
			case "FAQ":
				navigation.navigate("FAQScreen");
				break;
			case "Contact us":
				navigation.navigate("ContactScreen");
				break;
			case "Edit Profile":
				navigation.navigate("EditProfileScreen");
				break;
		}
	}

  return (
    <Box backgroundColor="white" m="5" mb="0">
      <Pressable onPress={() => onHandleItem(item.name)}>
        <HStack justifyContent="center" alignItems="center" mb="3">
					{item.name == "Settings" && <SettingsIcon />}
					{item.name == "FAQ" && <FAQIcon />}
					{item.name == "Contact us" && <ContactUSIcon />}
					{item.name == "Edit Profile" && <EditProfileIcon />}
          <VStack ml="5">
						<PoppinsText fontSize={15} color="#474747" mt="-1">
							{item.name}
						</PoppinsText>
            {item.text != "" && <PoppinsText fontSize={10} color="#979EA6">{item.text}</PoppinsText>}
          </VStack>
          <Spacer></Spacer>
        </HStack>
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
