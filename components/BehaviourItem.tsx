import * as React from 'react';
import { Pressable, Spacer, HStack, Switch, Box } from 'native-base';
import { PoppinsText } from "../components/PoppinsText";

export const BehaviourItem = (props: any) => {
	const [infoSwitch, setInfoSwitch] = React.useState(props.status);
	const [boxColor, setBoxColor] = React.useState(props.status ? "#000000" : "#979EA6");

	const onSwitchTouch = () => {
		if(infoSwitch) {
			setInfoSwitch(false);
			setBoxColor("#979EA6");
		}
		else {
			setInfoSwitch(true);
			setBoxColor("#000000");
		}
	}
	
  return (
		<Pressable mb="6">
			<HStack alignItems="flex-start">
				<PoppinsText fontSize={15} color="#979EA6">
					{props.name}
				</PoppinsText>
				<Spacer />
				<Box
					mt="-1"
					bg={boxColor}
					rounded="xl"
					overflow="hidden"
					borderColor={infoSwitch ? "#000000" : "#979EA6"}
					borderWidth="1"
					_web={{
						shadow: 2,
						borderWidth: 0,
					}}>
					{infoSwitch && 
						<Switch
							size="md"
							isChecked={true}
							onTouchEnd={ onSwitchTouch }
							offTrackColor="#000000"
							onTrackColor="#000000"
							onThumbColor="white"
						/>
					}
					{!infoSwitch && 
						<Switch
							size="md"
							isChecked={false}
							onTouchEnd={ onSwitchTouch }
							offTrackColor="#979EA6"
							onTrackColor="#979EA6"
							onThumbColor="white"
						/>
					}
				</Box>
			</HStack>
		</Pressable>
	);
}
