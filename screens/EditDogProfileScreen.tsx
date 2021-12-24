import React, { useState, useEffect } from "react";
import {
  VStack,
  Input,
  Spacer,
	HStack,
	TextArea,
	Divider,
} from "native-base";
import { Avatar } from 'react-native-elements'
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import { ScreenBox } from "../components/ScreenBox";
import { PhotoUpload } from "../components/PhotoUpload";
import { About } from "../components/About";
import { GeneralInfo } from "../components/GeneralInfo";
import { BehaviourList } from "../components/BehaviourList";
import { useNavigation } from "@react-navigation/core";
import GradientButton from "react-native-gradient-buttons";
import { useAuth } from "../stores/useAuth";

export default function EditDogProfileScreen() {
	const auth = useAuth();
	const navigation = useNavigation();
	const [step, setStep] = useState(0);

	console.log(auth.newUser)

	const onNext = () => {
		navigation.navigate("EditOwnerProfileScreen")
	}

  return (
		<ScreenBox>
			<VStack height="100%">
				<PhotoUpload marginTop="5" title="Please upload your dog’s image here" />
				<Input variant="unstyled" size="lg" placeholder="Dog Name" textAlign={"center"} />
				<Divider />
				<HStack width="100%" marginTop="10" alignItems="center">
					<GradientButton
						radius={15}
						width={99}
						height={44}
						text="About"
						textStyle={step == 0 ? { fontSize: 17 } : { fontSize: 17, color: "#B0B0B0", fontWeight: "normal" }}
						gradientBegin={step == 0 ? "#2B2B2B" : "#F5F5F5"}
						gradientEnd={step == 0 ? "#2B2B2B" : "#F5F5F5"}
						impactStyle='Light'
						onPressAction={() => setStep(0)}
					/>
					<Spacer />
					<GradientButton
						radius={15}
						width={124}
						height={44}
						text="General Info"
						textStyle={step == 1 ? { fontSize: 17 } : { fontSize: 17, color: "#B0B0B0", fontWeight: "normal" }}
						gradientBegin={step == 1 ? "#2B2B2B" : "#F5F5F5"}
						gradientEnd={step == 1 ? "#2B2B2B" : "#F5F5F5"}
						impactStyle='Light'
						onPressAction={() => setStep(1)}
					/>
					<Spacer />
					<GradientButton
						radius={15}
						width={112}
						height={44}
						text="Behaviour"
						textStyle={step == 2 ? { fontSize: 17 } : { fontSize: 17, color: "#B0B0B0", fontWeight: "normal" }}
						gradientBegin={step == 2 ? "#2B2B2B" : "#F5F5F5"}
						gradientEnd={step == 2 ? "#2B2B2B" : "#F5F5F5"}
						impactStyle='Light'
						onPressAction={() => setStep(2)}
					/>
				</HStack>
				{step == 0 && <About />}
				{step == 1 && <GeneralInfo />}
				{step == 2 && <BehaviourList />}
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
  );
}
