import React, { useState } from "react";
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
import api from '../api';
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";
import Wrapper from '../components/Wrapper';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
	const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false)

	const isEmpty = (): boolean => {
		let flag = false;
		let newErrors = {...errors};
		const { email } = formData;
		if (email === undefined || email === '') {
			flag = true;
			newErrors = {...newErrors, email: 'Required'}
    }
		setErrors(newErrors);
		return flag;
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

	const sendPasswordResetEmail = () => {
		if (!isEmpty() && Object.keys(errors).length === 0) {
			setIsLoading(true)
			const { email } = formData;
			api.sendPasswordResetEmail(email)
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
				setIsLoading(false)
				alert(error)
      });
		}
	}

  return (
		<Wrapper isLoading={isLoading}>
			<ScreenBox backColor="purple.100">
				<VStack space={3} h="100%">
					<Spacer></Spacer>
					<Center mb="10">
						<Text color="dark.500" fontSize={20} fontWeight="bold">
							Resetting your password
						</Text>
					</Center>
					<FormControl isRequired isInvalid={'email' in errors}>
						<Input placeholder="Your email" onChangeText={(value) => isValidation('email', value)} />
					</FormControl>

					<Button
						mt="5"
						size="lg"
						rounded="20px"
						colorScheme="rose"
						_text={{ color: "white" }}
						onPress={sendPasswordResetEmail}
					>
						Send
					</Button>
					<Spacer></Spacer>
					<Center mb="5">
						<Text
							mb="5"
							color="dark.500"
							fontSize={15}
							fontWeight="bold"
							onPress={() => navigation.navigate("SignInScreen")}
						>
							To log in
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
		</Wrapper>
  );
}
