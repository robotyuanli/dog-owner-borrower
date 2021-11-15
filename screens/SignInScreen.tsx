import React, {useState} from "react";
import {
  VStack,
  Input,
  Button,
  Center,
  Image,
  Spacer,
  Text,
	FormControl,
} from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";
import { useAuth } from "../stores/useAuth";

export default function SignInScreen() {
	const auth = useAuth();
  const navigation = useNavigation();
	const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});

	const isEmpty = (): boolean => {
		let flag = false;
		let newErrors = {...errors};
		const { email, password } = formData;
		if (email === undefined || email === '') {
			flag = true;
			newErrors = {...newErrors, email: 'Required'}
    }
		if (password === undefined || password === '') {
			flag = true;
			newErrors = {...newErrors, password: 'Required'}
    }
		setErrors(newErrors);
		return flag;
	}

	const onHandleSignin = () => {
		const { email, password } = formData;
		if (!isEmpty() && Object.keys(errors).length === 0) {
			auth.signIn(email, password);
		}
	}

	const isValidation = (field: string, value: string) => {
		setData({ ...formData, [field]: value });
		if (value === '') {
			setErrors({...errors, [field]: "Required"});
		}
		else {
			delete errors[field];
			setErrors(errors);
		}
	}

  return (
		<ScreenBox backColor="purple.100">
			<VStack space={3} h="100%">
				<Spacer></Spacer>
				<Center mb="10">
					<Text color="dark.500" fontSize={20} fontWeight="bold">
						To log in
					</Text>
				</Center>
				<FormControl isRequired isInvalid={'email' in errors}>
					<Input placeholder="Your email" onChangeText={(value) => isValidation('email', value)} />
				</FormControl>
				<FormControl isRequired isInvalid={'password' in errors}>
					<Input type="password" placeholder="Password" onChangeText={(value) => isValidation('password', value)} />
				</FormControl>

				<Button
					mt="5"
					size="lg"
					rounded="20px"
					colorScheme="rose"
					_text={{ color: "white" }}
					onPress={onHandleSignin}
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
