import React, { useState } from "react";
import {
  VStack,
	HStack,
} from "native-base";
import { ScreenBox } from "../components/ScreenBox";
import { PoppinsText } from "../components/PoppinsText";
import Email from '../assets/svgs/email.svg';
import Phone from '../assets/svgs/phone.svg';

export default function ContactScreen() {	
  return (
		<ScreenBox backColor="white">
			<PoppinsText fontSize={34} color="#474747" fontWeight="bold">
				Contact Us
			</PoppinsText>

			<VStack mt="10" ml="5">
				<HStack alignItems="center">
					<Email />
					<PoppinsText color="#474747" fontSize={15} ml="5">wantadogwalkadog@gmail.com</PoppinsText>
				</HStack>
				<HStack mt="10" alignItems="center">
					<Phone />
					<PoppinsText color="#474747" fontSize={15} ml="5">646 510 5578</PoppinsText>
				</HStack>
			</VStack>
		</ScreenBox>
  );
}
