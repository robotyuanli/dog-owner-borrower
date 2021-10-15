import * as React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
} from "native-base";
import { useNavigation } from "@react-navigation/core";
import { supabase } from "../supabase";
import { ScreenBox } from "../components/ScreenBox";

export default function SignInScreen() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const signinUser = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
    } catch (error) {
      console.log("Something went wrong with sign in: ", error);
    }
  };

  const navigation = useNavigation();
  return (
    <ScreenBox scrollable={false}>
      <Heading size="xl" fontWeight="600">
        Welcome
      </Heading>
      <Heading mt="1" fontWeight="medium" size="sm">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input onChangeText={setEmail} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" onChangeText={setPassword} />
          <Link
            _text={{ fontSize: "sm", fontWeight: "500", color: "primary.500" }}
            alignSelf="flex-end"
            mt="1"
          >
            Forget Password?
          </Link>
        </FormControl>
        <Button
          onPress={signinUser}
          mt="2"
          colorScheme="primary"
          _text={{ color: "white" }}
          size="lg"
        >
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="md" fontWeight={400}>
            I'm a new user.{" "}
          </Text>
          <Text
            onPress={() => navigation.navigate("SignUpScreen")}
            color="primary.500"
            fontWeight={400}
            fontSize="md"
          >
            Sign Up
          </Text>
        </HStack>
      </VStack>
    </ScreenBox>
  );
}
