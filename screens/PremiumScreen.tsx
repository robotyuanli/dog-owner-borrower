import { Box, View, Image, theme } from "native-base";
import * as React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { PremiumItem } from "../components/PremiumItem";

const items = [
  {
    icon: "paw",
    name: "Activate premium",
    text: "adfeasdfa",
    color: theme.colors.yellow[400],
  },
  {
    icon: "cog",
    name: "Settings",
    text: "Change your setting",
    color: theme.colors.orange[600],
  },
  {
    icon: "question-circle",
    name: "FAQ",
    text: "Consult the online help",
		color: theme.colors.secondary[700],
		path: "HelpScreen"
  },
  {
    icon: "comment",
    name: "Contact us",
    text: "Have a question? Contact us",
		color: theme.colors.primary[500],
		path: "ContactScreen",
  },
  {
    icon: "plus",
    name: "Assistance veterinary 24h/24",
    text: "See number",
    color: theme.colors.green[600],
  },
  {
    icon: "pencil",
    name: "Edit your profile",
    text: "Change your information",
		color: theme.colors.rose[500],
		path: "EditProfileScreen",
  },
  {
    icon: "gift",
    name: "Partner offers",
    text: "Activate your advantages",
    color: theme.colors.primary[500],
  },
];

export default function PremiumScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ tabBarVisible: false });

  return (
    <Box backgroundColor="white" h="100%">
      <View
        height="60"
        backgroundColor="#ff2643"
        justifyContent="center"
        alignItems="center"
        mt="-1"
      >
        <Image
          size={12}
          resizeMode={"contain"}
          borderRadius={500}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
        />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <PremiumItem item={item} />}
      />
    </Box>
  );
}
