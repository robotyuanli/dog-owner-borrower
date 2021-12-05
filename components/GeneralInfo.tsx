import React from "react";
import { HStack, Input, View, TextArea, Spacer } from "native-base";
import { PoppinsText } from "./PoppinsText";
import Minus from '../assets/svgs/minus.svg';

export const GeneralInfo = () => {

  return (
		<View mt="7">
			<HStack justifyContent="center" alignItems="center" mb="5">
				<PoppinsText fontSize={15} color="#979EA6" width={100}>
					Dog Breed
				</PoppinsText>
				<Spacer />
				<Minus />
				<Spacer />
				<Input variant="unstyled" width={183} backgroundColor="#F0F0F0" borderRadius="30" textAlign={"center"} size="lg" />
			</HStack>
			<HStack justifyContent="center" alignItems="center" mb="5">
				<PoppinsText fontSize={15} color="#979EA6" width={100}>
					Weight
				</PoppinsText>
				<Spacer />
				<Minus />
				<Spacer />
				<Input variant="unstyled" width={183} backgroundColor="#F0F0F0" borderRadius="30" textAlign={"center"} size="lg" />
			</HStack>
			<PoppinsText fontSize={15} color="#979EA6">
				If any medical conditions please leave a short note below
			</PoppinsText>
			<TextArea
				mt="2"
				h={20}
				size="lg"
				variant="unstyled"
				borderRadius={20}
				backgroundColor="#F0F0F0"
			/>
		</View>
  );
};
