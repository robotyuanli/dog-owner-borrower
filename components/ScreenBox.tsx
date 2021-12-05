import { Box, ScrollView } from "native-base";
import React from "react";
import { ComponentProps} from "../types";

export const ScreenBox = (props: ComponentProps) => {

  return (
		<Box
			w="100%"
			flex={1}
			safeArea
			px="6"
			py="0"
			backgroundColor="white"
		>
			{props.children}
		</Box>
  );
};
