import { Center, Text, Icon, HStack, Spacer } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export const PremiumBack = () => {
  const navigation = useNavigation();
  return (
    <Center>
      <HStack ml="3">
        <FontAwesome
          size={20}
          name="chevron-left"
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </HStack>
    </Center>
  );
};
