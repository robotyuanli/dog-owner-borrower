import { Box, ScrollView } from "native-base";
import React from "react";

interface ScreenBoxProps {
  children?: JSX.Element | JSX.Element[];
  backColor: string;
}

export const DogOwnerBox = (props: ScreenBoxProps) => {
  return (
    <Box
      w="100%"
      flex={1}
      safeArea
      px="6"
      py="0"
      backgroundColor={props.backColor}
    >
      {props.children}
    </Box>
  );
};
