import React from "react";
import { Center } from "native-base";
import { PoppinsText } from "./PoppinsText";
import Upload from '../assets/svgs/upload.svg';

export const Images = () => {

  return (
		<Center mt="10">
			<PoppinsText fontSize={15} color="#979EA6" mx="5" mb="5">
				Please upload more images of your dog here to showcase on your profile
			</PoppinsText>
			<Upload />
		</Center>
  );
};
