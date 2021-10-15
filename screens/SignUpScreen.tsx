import * as React from "react";
import {
  Text,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
	HStack,
	Flex,
	Center,
	Spacer,
} from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";

export default function SignUpScreen() {

  const navigation = useNavigation();
  return (
    <ScreenBox>
			<VStack height="100%">
				<Spacer></Spacer>
				<Flex space={5} direction="column">
					<Center mb="10">
					<Text color="rose.500" fontSize={20} fontWeight="medium">Sign Up</Text>
					</Center>
					<Button
						size="lg"
						rounded="20px"
						colorScheme="rose"
						_text={{ color: "white" }}
						onPress={() => navigation.navigate("DogOwnerScreen")}
					>
						Dog Owner
					</Button>
					<Button
						size="lg"
						rounded="20px"
						marginTop="70px"
						colorScheme="rose"
						_text={{ color: "white" }}
						onPress={() => navigation.navigate("DogBorrowerScreen")}
					>
						Dog Borrower
					</Button>
				</Flex>
				<Spacer></Spacer>
			</VStack>
    </ScreenBox>
  );
}
