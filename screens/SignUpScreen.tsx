import React, {useState, useEffect} from "react";
import {
  VStack,
  Center,
  Text,
	HStack,
	View,
} from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";
import { PoppinsText } from "../components/PoppinsText";
import { ImageButton } from "../components/ImageButton";
import GradientButton from "react-native-gradient-buttons";
import { StyleSheet } from "react-native";
import { useAuth } from "../stores/useAuth";
import { FloatingLabelInput, setGlobalStyles  } from 'react-native-floating-label-input';

setGlobalStyles.containerStyles = {
  backgroundColor: '#F0F0F0',
	paddingHorizontal: 10,
	borderRadius: 8,
	height: 58,
};
setGlobalStyles.customLabelStyles = {
  colorFocused: '#979EA6',
};
setGlobalStyles.inputStyles = {
  color: '#2B2B2B',
	paddingHorizontal: 6,
};

export default function SignUpScreen() {
	const auth = useAuth();
  const navigation = useNavigation();
	const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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

	const onHandleSignup = () => {
		navigation.navigate("UserTypeScreen")
		// const { email, password } = formData;
		// if (!isEmpty() && Object.keys(errors).length === 0) {
		// 	auth.signIn(email, password);
		// }
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
		<ScreenBox>
			<VStack space={3} h="100%">
				<PoppinsText fontSize={34} color="#2B2B2B" fontWeight="bold">
					Let's start here
				</PoppinsText>
				<PoppinsText fontSize={17} color="#7A7A7A">
					Fill in your details to begin
				</PoppinsText>
				<View marginBottom={2}>
					<FloatingLabelInput
						label="Full Name"
						value={fullName}
						onChangeText={value => {
							setFullName(value);
						}}
					/>
				</View>
				<View marginBottom={2}>
					<FloatingLabelInput
						label="E-mail"
						value={email}
						onChangeText={value => {
							setEmail(value);
						}}
					/>
				</View>
				<View marginBottom={2}>
					<FloatingLabelInput
						isPassword
						label="Password"
						value={password}
						onChangeText={value => {
							setPassword(value);
						}}
					/>
				</View>
				<GradientButton
					radius={15}
					height={58}
					text="Sign up"
					textStyle={{ fontSize: 17 }}
					gradientBegin="#FC5C4C"
					gradientEnd="#FD814A"
					gradientDirection="diagonal"
					impactStyle='Light'
					onPressAction={onHandleSignup}
				/>
				<Center>
					<PoppinsText
						color="#2B2B2B"
						fontSize={15}
					>
						or
					</PoppinsText>
				</Center>
				<ImageButton size={17} name="Connect with Facebook" backColor="#3B5998" textColor="white" type={0} borderWidth={0}/>
				<ImageButton size={17} name="Connect with Google" backColor="white" textColor="#2B2B2B" type={1} borderWidth={1}/>
				<HStack justifyContent="center" mt="2">
					<PoppinsText
						color="dark.500"
						fontSize={15}
					>
						By signing in, agree with
					</PoppinsText>
					<PoppinsText
						ml="1"
						color="#2B2B2B"
						fontSize={15}
					>
						Terms of Use
					</PoppinsText>
				</HStack>
				<HStack mb="5" justifyContent="center">
					<Text
						color="dark.500"
						fontSize={15}
					>
						and
					</Text>
					<Text
						ml="1"
						color="#2B2B2B"
						fontSize={15}
						onPress={() => navigation.navigate("ForgotPasswordScreen")}
					>
						Privacy Policy
					</Text>
				</HStack>
			</VStack>
		</ScreenBox>
  );
}
var styles = StyleSheet.create({
  iconLeft: {
    alignSelf: 'flex-start'
  },
});