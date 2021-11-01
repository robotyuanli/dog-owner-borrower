import * as React from "react";
import { Text, VStack, Image, Button, Flex, Center, Spacer } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <ScreenBox backColor="purple.100">
      <VStack height="100%">
        <Spacer></Spacer>
        <Flex space={5} direction="column">
          <Center mb="10">
            <Text color="rose.500" fontSize={25} fontWeight="bold">
              You are :
            </Text>
          </Center>
          <Button
            size="lg"
            rounded="20px"
            colorScheme="rose"
            _text={{ color: "white" }}
            onPress={() => navigation.navigate("OwnerBorrowerScreen", {type: "owner"})}
          >
            Doggie master
          </Button>
          <Center mt="2">
            <Text color="dark.500" fontWeight="bold">
              (entrust your doggie)
            </Text>
          </Center>
          <Button
            size="lg"
            rounded="20px"
            marginTop="70px"
            colorScheme="rose"
            _text={{ color: "white" }}
            onPress={() => navigation.navigate("OwnerBorrowerScreen", {type: "borrower"})}
          >
            Borrower
          </Button>
          <Center mt="2">
            <Text color="dark.500" fontWeight="bold">
              (meet doggies)
            </Text>
          </Center>
        </Flex>
        <Spacer></Spacer>
        <Center mb="5">
          <Text
            mb="3"
            color="dark.500"
            fontWeight="bold"
            onPress={() => navigation.navigate("SignInScreen")}
          >
            Already a member ? To log in
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
