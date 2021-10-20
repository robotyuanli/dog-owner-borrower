import React from "react";
import {
  Box,
  theme,
  Text,
  HStack,
  Spacer,
  View,
  Center,
  VStack,
} from "native-base";
import { StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface ScreenBoxProps {
  children?: JSX.Element | JSX.Element[];
  item: any;
}

export const ImageBox = (props: ScreenBoxProps) => {
  const item = props.item;

  return (
    <Box>
      <HStack
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Text ml="1" color="dark.400">
          Clotilde, 2 km
        </Text>
        <Spacer></Spacer>
        <FontAwesome name="star" color={theme.colors.orange[600]} />
        <Text ml="1" mr="1" color="dark.400">
          5
        </Text>
      </HStack>
      <View>
        <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
        <HStack style={styles.btnContainer}>
          <Spacer></Spacer>
          <VStack
            width="10"
            height="10"
            borderRadius="300"
            backgroundColor="#ff2643"
          >
            <Spacer></Spacer>
            <Center>
              <FontAwesome size={15} name="envelope" color="white" />
            </Center>
            <Spacer></Spacer>
          </VStack>
          <VStack
            ml="3"
            width="10"
            height="10"
            borderRadius="300"
            backgroundColor="#ff2643"
          >
            <Spacer></Spacer>
            <Center>
              <FontAwesome size={15} name="heart" color="white" />
            </Center>
            <Spacer></Spacer>
          </VStack>
          <Spacer></Spacer>
        </HStack>
      </View>
      <HStack
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <View ml="1">
          <FontAwesome name="paw" color={theme.colors.yellow[300]} />
        </View>
        <Text ml="1" color="yellow.300">
          Premium
        </Text>
        <Spacer></Spacer>
        <FontAwesome name="upload" color={theme.colors.green[600]} />
        <Text ml="1" mr="1" color="dark.400">
          Valide
        </Text>
      </HStack>
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
