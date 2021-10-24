import { Spacer, Checkbox, Text, HStack } from "native-base";
import React from "react";
import { ItemProps} from "../types";

export const NavbarItem = (props: ItemProps) => {
	const item = props.item;
  return (
    <HStack pt="3" height="10">
			<Text color="dark.500">{item.name}</Text>
			<Spacer></Spacer>
			<Checkbox mr="2" value="danger" colorScheme="danger" />
		</HStack>
  );
};
