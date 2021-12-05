import React, { useState } from "react";
import {
  VStack,
  Spacer,
	Center,
	View,
} from "native-base";
import api from '../api';
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";
import { PoppinsText } from "../components/PoppinsText";
import GradientButton from "react-native-gradient-buttons";
import Wrapper from '../components/Wrapper';
import { TextInput } from 'react-native-paper';
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

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
	const [step, setStep] = useState(1);
	const [email, setEmail] = useState('')
	const [otp, setOtp] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
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

	const onNext = () => {
		if(step == 3) {
			navigation.navigate("SignInScreen")
		}
		else {
			setStep(step + 1)
		}
	}

  return (
		<Wrapper isLoading={isLoading}>
			<ScreenBox backColor="purple.100">
				<VStack space={3} h="100%">
					<PoppinsText fontSize={34} color="#2B2B2B" fontWeight="bold">
						Reset Password
					</PoppinsText>
					<PoppinsText fontSize={13} color="#979EA6">
						{step}/3
					</PoppinsText>
					{step == 1 && 
						<FloatingLabelInput
							label="Your email"
							value={email}
							onChangeText={value => {
								setEmail(value);
							}}
						/>
					}
					{step == 2 && 
						<>
							<FloatingLabelInput
								label="otp"
								value={otp}
								onChangeText={value => {
									setOtp(value);
								}}
							/>
							<Center mt="5">
								<PoppinsText fontSize={14} color="#7A7A7A">
									Enter the verification code sent to your mail
								</PoppinsText>
							</Center>
						</>
					}
					{step == 3 && 
						<>
							<View marginBottom={4}>
								<FloatingLabelInput
									label="new password"
									value={password}
									onChangeText={value => {
										setPassword(value);
									}}
								/>
							</View>
							<FloatingLabelInput
								label="verify password"
								value={password2}
								onChangeText={value => {
									setPassword2(value);
								}}
							/>
						</>
					}
					<Spacer></Spacer>
					<GradientButton
						radius={15}
						height={58}
						text="Next"
						textStyle={{ fontSize: 17 }}
						gradientBegin="#FC5C4C"
						gradientEnd="#FD814A"
						gradientDirection="diagonal"
						impactStyle='Light'
						style={{ marginBottom: 29 }}
						onPressAction={onNext}
					/>
				</VStack>
			</ScreenBox>
		</Wrapper>
  );
}
