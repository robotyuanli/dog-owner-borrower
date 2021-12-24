import React, {useState} from "react";
import { VStack, Progress, Center, Spacer, HStack, Box, View } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { ScreenBox } from "../components/ScreenBox";
import { PoppinsText } from "../components/PoppinsText";
import GradientButton from "react-native-gradient-buttons";
import { FloatingLabelInput, setGlobalStyles  } from 'react-native-floating-label-input';
import Owner from '../assets/svgs/owner.svg';
import { useAuth } from "../stores/useAuth";
import Borrower from '../assets/svgs/borrower.svg';
import { Pressable } from "react-native";

setGlobalStyles.containerStyles = {
  backgroundColor: '#F0F0F0',
	paddingHorizontal: 10,
	borderRadius: 8,
	height: 60,
};
setGlobalStyles.customLabelStyles = {
  colorFocused: '#979EA6',
};
setGlobalStyles.inputStyles = {
  color: '#2B2B2B',
	paddingHorizontal: 6,
};

export default function UserTypeScreen() {
	const auth = useAuth();
	const [step, setStep] = useState(1);
	const [address, setAddress] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [suite, setSuite] = useState("");
	const [beginColor, setBeginColor] = useState("#979EA6")
	const [endColor, setEndColor] = useState("#979EA6")
	const [isActive, setIsActive] = useState(false)
	const [ownerWidth, setOwnerWidth] = useState(0)
	const [borrowerWidth, setBorrowerWidth] = useState(0)
  const navigation = useNavigation();

	const OnOwnerClick = () => {
		if(ownerWidth == 0) {
			setStep(2)
			setOwnerWidth(1)
			setBorrowerWidth(0)
			setBeginColor("#FC5C4C")
			setEndColor("#FD814A")
		}
		else {
			setStep(1)
			setOwnerWidth(0)
			setBeginColor("#979EA6")
			setEndColor("#979EA6")
		}
	}

	const OnBorrowerClick = () => {
		if(borrowerWidth == 0) {
			setStep(2)
			setBorrowerWidth(1)
			setOwnerWidth(0)
			setBeginColor("#FC5C4C")
			setEndColor("#FD814A")
		}
		else {
			setStep(step - 1)
			setBorrowerWidth(0)
			setBeginColor("#979EA6")
			setEndColor("#979EA6")
		}
	}

	const onNext = () => {
		if(step == 3) {
			if(address != "" && postalCode != "" && suite != "") {
				auth.saveUser({address, postalCode, suite}, 3)
				if(ownerWidth == 1) {
					navigation.navigate("EditDogProfileScreen")
				}
				if(borrowerWidth == 1) {
					navigation.navigate("EditBorrowerProfileScreen")
				}
			}
		}
		if(step == 2) {
			setStep(3)
			if(ownerWidth == 1) {
				auth.saveUser({type: "owner"}, 2)
			}
			else {
				auth.saveUser({type: "borrower"}, 2)
			}
		}
	}

  return (
    <ScreenBox>
      <VStack height="100%">
				<PoppinsText fontSize={34} color="#2B2B2B" fontWeight="bold">
					We love dogs!!
				</PoppinsText>
				<HStack>
					<PoppinsText fontSize={17} color="#7A7A7A">
						Tell us something about
					</PoppinsText>
					<PoppinsText fontSize={17} color="#FC5C4C" ml="1">
						You
					</PoppinsText>
				</HStack>
				<PoppinsText fontSize={13} color="#979EA6" mt="10" mb="2">
					{step}/3
				</PoppinsText>
				<Progress colorScheme="orange" size="xs" mb="10" bg="dark.900" value={step == 3 ? 100 : 33*step} />
				{step != 3 && 
					<>
						<Pressable onPress={() => OnOwnerClick()}>
							<Box backgroundColor="#F7F7F7" height={58} borderRadius={15} mx={2} justifyContent="center" px={5} borderColor="#FD814A" borderWidth={ownerWidth}>
								<HStack>
									<Owner />
									<Spacer />
									<PoppinsText color="#2B2B2B" fontSize={22} mt="1" fontWeight="bold">Doggie Owner</PoppinsText>
									<Spacer />
								</HStack>
							</Box>
						</Pressable>
						<Center mt="3" mb="10">
							<PoppinsText fontSize={14} color="dark.500" ml="1">
								(entrust your doggie)
							</PoppinsText>
						</Center>
						<Pressable onPress={() => OnBorrowerClick()}>
							<Box backgroundColor="#F7F7F7" height={58} borderRadius={15} mx={2} justifyContent="center" px={5} borderColor="#FD814A" borderWidth={borrowerWidth}>
								<HStack>
									<Borrower />
									<Spacer />
									<PoppinsText color="#2B2B2B" fontSize={22} mt="1" fontWeight="bold">Dog Borrower</PoppinsText>
									<Spacer />
								</HStack>
							</Box>
						</Pressable>
						<Center mt="3">
							<PoppinsText fontSize={14} color="dark.500" ml="1">
								(meet doggies)
							</PoppinsText>
						</Center>
					</>
				}
				{step == 3 && 
					<>
						<View marginBottom={5}>
							<FloatingLabelInput
								label="Address"
								value={address}
								onChangeText={value => {
									setAddress(value);
								}}
							/>
						</View>
						<View marginBottom={5}>
							<FloatingLabelInput
								label="Postal Code"
								value={postalCode}
								onChangeText={value => {
									setPostalCode(value);
								}}
							/>
						</View>
						<FloatingLabelInput
							label="Suite(optional)"
							value={suite}
							onChangeText={value => {
								setSuite(value);
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
					gradientBegin={beginColor}
					gradientEnd={endColor}
					gradientDirection="diagonal"
					impactStyle='Light'
					style={{ marginBottom: 29 }}
					onPressAction={onNext}
				/>
      </VStack>
    </ScreenBox>
  );
}
