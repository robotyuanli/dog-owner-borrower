import * as React from "react";
import { Text, Button, Center, Image } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";
import AppIntroSlider from "react-native-app-intro-slider";

export default function DogOwnerScreen() {
  const navigation = useNavigation();
  const slides = [
    {
      key: 1,
      title: "Welcome to the toutousphère",
      text:
        "Borrow Mon Toutou is a community of thousands of members that connects doggie owners with people who don't have dogs but love them. This for walks, guards, and shared happiness.",
      image: require("../assets/images/logo.png"),
    },
    {
      key: 2,
      title: "Welcome to the toutousphère",
      text:
        "Borrow Mon Toutou is a community of thousands of members that connects doggie owners with people who don't have dogs but love them. This for walks, guards, and shared happiness.",
      image: require("../assets/images/logo.png"),
    },
  ];
  const _renderItem = ({ item }: any) => {
    return (
      <Center mt="10">
        <Image
          alt="logo"
          mb="10"
          size="150"
          resizeMode={"contain"}
          source={item.image}
        />
        <Text color="rose.500" fontSize={25} fontWeight="bold" mb="5">
          {item.title}
        </Text>
        <Text color="dark.500" fontWeight="bold">
          {item.text}
        </Text>
      </Center>
    );
  };
  return (
    <ScreenBox backColor="white">
      <AppIntroSlider
        renderItem={_renderItem}
        showDoneButton={false}
        showNextButton={false}
        dotStyle={{ backgroundColor: "#f5c0c7" }}
        activeDotStyle={{ backgroundColor: "#ea414c" }}
        data={slides}
      />
      <Button
        mb="5"
        size="lg"
        rounded="20px"
        colorScheme="rose"
        _text={{ color: "white" }}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        Register now
      </Button>
      <Center>
        <Text
          mb="10"
          color="rose.500"
          fontSize={15}
          fontWeight="bold"
          onPress={() => navigation.navigate("SignInScreen")}
        >
          To log in
        </Text>
      </Center>
    </ScreenBox>
  );
}
