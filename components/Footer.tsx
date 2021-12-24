import React from "react";
import { VStack, HStack, Text } from "native-base";
import { PoppinsText } from "./PoppinsText";

export const Footer = () => {

  return (
		<VStack>
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
					>
						Privacy Policy
					</Text>
				</HStack>
		</VStack>
  );
};
