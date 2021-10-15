import * as React from "react";
import {
  Text,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
	ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";

export default function DogOwnerScreen() {

  const navigation = useNavigation();
  return (
    <ScreenBox>
      <VStack space={3}>
				<Input placeholder="Name"/>
				<Input placeholder="Dog Name"/>
				<Input placeholder="Address"/>
				<Input placeholder="Postal Code"/>
				<Input placeholder="Suite"/>
				<Input placeholder="Email"/>
				<Input placeholder="Password"/>
				<Input placeholder="Verify Password"/>
				<Input placeholder="Telephone"/>
				<Input placeholder="Verify Telephone"/>

        <Button
					mt="2"
          size="lg"
					rounded="20px"
          colorScheme="rose"
          _text={{ color: "white" }}
        >
          Login
        </Button>
      </VStack>
    </ScreenBox>
  );
}
