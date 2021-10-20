import { Center, Text, Icon, HStack, Spacer } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export const SearchLeft = () => {
  return (
    <Center>
      <HStack ml="3">
        <FontAwesome size={25} name="list-ul" color="white" />
        <Text fontWeight="bold" color="white" ml="1">
          (0)
        </Text>
      </HStack>
    </Center>
  );
};
