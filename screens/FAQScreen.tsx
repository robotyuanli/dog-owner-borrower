import React, { useState } from "react";
import { ScreenBox } from "../components/ScreenBox";
import { PoppinsText } from "../components/PoppinsText";
import GradientButton from "react-native-gradient-buttons";

export default function FAQScreen() {	
  return (
		<ScreenBox backColor="white">
			<PoppinsText fontSize={34} color="#474747" fontWeight="bold" mb="10">
				FAQ
			</PoppinsText>
			
			<PoppinsText fontSize={17} color="#979EA6" mb="5">
				- How do you know dog is safe?
			</PoppinsText>
			<GradientButton
				radius={15}
				height={58}
				text="Pact of Good Conduct"
				textStyle={{ fontSize: 17 }}
				gradientBegin="#FC5C4C"
				gradientEnd="#FD814A"
				gradientDirection="diagonal"
				impactStyle='Light'
			/>
			<PoppinsText fontSize={17} color="#979EA6" mt="5" mb="5">
				- How do I get in room with a dog lover?
			</PoppinsText>
			<GradientButton
				radius={15}
				height={58}
				text="Message Them"
				textStyle={{ fontSize: 17 }}
				gradientBegin="#FC5C4C"
				gradientEnd="#FD814A"
				gradientDirection="diagonal"
				impactStyle='Light'
			/>
		</ScreenBox>
  );
}
