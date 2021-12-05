import React from "react";
import { TextArea } from "native-base";
import { PoppinsText } from "../components/PoppinsText";

export const About = () => {

  return (
		<>
			<TextArea
				mt="7"
				h={20}
				size="lg"
				variant="unstyled"
				borderRadius={10}
				backgroundColor="#F0F0F0"
				placeholder="About your dog"
			/>
			<PoppinsText fontSize={15} color="#FD814A" fontWeight="bold">
				Read more
			</PoppinsText>
		</>
  );
};
