import { Box,Text, Pressable } from "native-base";
import React from "react";
import { useAuth } from "../stores/useAuth";

export const NavbarRight = () => {
	const auth = useAuth()

  return (
    <Box mr="2" justifyContent="center">
			<Pressable onPress={() => console.log('aaaaaaabbbbbbb')}>
      	<Text color="rose.500" fontSize={16}>Reset filters</Text>
			</Pressable>
    </Box>
  );
};
