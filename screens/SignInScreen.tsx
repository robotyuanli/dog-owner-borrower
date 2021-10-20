import * as React from "react";
import {
  VStack,
  Input,
  Button,
  Center,
  Image,
  Spacer,
  Text,
} from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <ScreenBox backColor="purple.100">
      <VStack space={3} h="100%">
        <Spacer></Spacer>
        <Center mb="10">
          <Text color="dark.500" fontSize={20} fontWeight="bold">
            To log in
          </Text>
        </Center>
        <Input placeholder="Your email" />
        <Input placeholder="Password" />

        <Button
          mt="5"
          size="lg"
          rounded="20px"
          colorScheme="rose"
          _text={{ color: "white" }}
					onPress={() => navigation.navigate("Root", {screen: "SearchScreen"})}
        >
          To log in
        </Button>
        <Spacer></Spacer>
        <Center mb="5">
          <Text
            mb="5"
            color="dark.500"
            fontSize={15}
            fontWeight="bold"
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            Forgot your password ?
          </Text>
          <Text
            mb="5"
            color="dark.500"
            fontSize={15}
            fontWeight="bold"
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Not registered?
          </Text>
          <Image
            alt="dog"
            size="30"
            resizeMode={"contain"}
            source={require("../assets/images/dog.png")}
          />
        </Center>
      </VStack>
    </ScreenBox>
  );
}
