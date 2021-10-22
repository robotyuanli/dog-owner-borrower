import { Box, View, Text, Tabs, HStack } from "native-base";
import React, { useState } from "react";
import { ScreenBox } from "../components/ScreenBox";
import { Pressable } from "react-native";

export default function FavouriteScreen() {
  const [index, setIndex] = useState(0);

  return (
    <Box>
      <HStack w="100%">
        <View
          flexGrow="1"
          height="10"
          alignItems="center"
          justifyContent="center"
          onTouchStart={() => {
            setIndex(0);
          }}
          backgroundColor={index == 0 ? "#f01437" : "#ff2643"}
        >
          <Text>Your ♡</Text>
        </View>
        <View
          flexGrow="1"
          height="10"
          alignItems="center"
          justifyContent="center"
          onTouchStart={() => {
            setIndex(1);
          }}
          backgroundColor={index == 1 ? "#f01437" : "#ff2643"}
        >
          <Text textAlign="center">♡ Receipts</Text>
        </View>
        <View
          flexGrow="1"
          height="10"
          alignItems="center"
          justifyContent="center"
          onTouchStart={() => {
            setIndex(2);
          }}
          backgroundColor={index == 2 ? "#f01437" : "#ff2643"}
        >
          <Text textAlign="center">♡ Mutuals</Text>
        </View>
      </HStack>
    </Box>
  );
}
