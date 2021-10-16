import * as React from "react";
import {
  Text,
  VStack,
  Center,
  Input,
  Image,
  Button,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";

export default function DogOwnerScreen() {
  const navigation = useNavigation();
  return (
    <ScreenBox backColor="purple.100">
      <ScrollView>
        <VStack space={3}>
          <Input placeholder="Name" />
          <Input placeholder="Dog Name" />
          <Input placeholder="Address" />
          <Input placeholder="Postal Code" />
          <Input placeholder="Suite" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Verify Password" />
          <Input placeholder="Telephone" />
          <Input placeholder="Verify Telephone" />

          <Button
            mt="5"
            size="lg"
            rounded="20px"
            colorScheme="rose"
            _text={{ color: "white" }}
          >
            Register now
          </Button>
          <Center mb="5">
            <Image
              alt="dog"
              size="30"
              resizeMode={"contain"}
              source={require("../assets/images/dog.png")}
            />
          </Center>
        </VStack>
      </ScrollView>
    </ScreenBox>
  );
}
