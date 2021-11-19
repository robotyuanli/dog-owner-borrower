import { Spacer, Checkbox, Text, HStack, Pressable } from "native-base";
import React, { useState, useEffect } from "react";
import { useAuth } from "../stores/useAuth";

export const NavbarItem = (props: any) => {
	const auth = useAuth()
	const item = props.item;
	const {weekends, weekDay, weekNight, walk, dayNight, week} = auth
	const [isChecked, setIsChecked] = useState()

	// useEffect(() => {
	// 	console.log(auth)
	// 	switch(item.name) {
	// 		case 'Weekends':
	// 			setIsChecked(weekends)
	// 			break;
	// 		case 'Weekdays night':
	// 			setIsChecked(weekNight)
	// 			break;
	// 		case 'Weekdays days':
	// 			setIsChecked(weekDay)
	// 			break;
	// 		case 'One walk':
	// 			setIsChecked(walk)
	// 			break;
	// 		case 'One day + night':
	// 			setIsChecked(dayNight)
	// 			break;
	// 		case 'Week / weekends':
	// 			setIsChecked(week)
	// 			break;
	// 	}
  // }, [])

  return (
    <HStack pt="3" height="10">
			<Text color="dark.500">{item.name}</Text>
			<Spacer></Spacer>
			<Pressable onPress={() => auth.setWeekends(!auth.weekends)}>
				<Checkbox mr="2" value="danger" colorScheme="danger" defaultIsChecked={weekends}/>
			</Pressable>
		</HStack>
  );
};
