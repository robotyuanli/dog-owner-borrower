import { theme, Box, Image, Spacer, VStack, Center } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  editButton: {
    position: "absolute",
    top: 15,
    left: -5,
  },
});

export const SearchRight = () => {
  return (
    <Box mr="3">
      <Image
        size={9}
        resizeMode={"contain"}
        borderRadius={500}
        source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg",
        }}
        alt="Alternate Text"
      />
      <VStack
        width="4"
        height="4"
        borderRadius="300"
        backgroundColor="white"
        style={styles.editButton}
      >
        <Spacer></Spacer>
        <Center>
          <FontAwesome size={10} name="pencil" color={theme.colors.rose[500]} />
        </Center>
        <Spacer></Spacer>
      </VStack>
    </Box>
  );
};
