import React from "react";
import { Box, HStack, Icon, Spacer, Image } from 'native-base';
import { useNavigation } from "@react-navigation/core";
import { PoppinsText } from "../components/PoppinsText";
import Google from '../assets/svgs/google.svg';
import { TouchableOpacity } from "react-native";

export function ImageButton(props: any) {
	const navigation = useNavigation()

  return (
		<TouchableOpacity>
			<Box backgroundColor={props.backColor} height={58} borderRadius={15} mx={2} justifyContent="center" px={5} borderColor="#B0B0B0" borderWidth={props.borderWidth}>
				<HStack>
					{props.type === 0 ? 
						<Image
							alt="facebook"
							width="24px"
							height="24px"
							resizeMode={"contain"}
							source={require("../assets/images/facebook.png")}
						/> :
						<Google />
					}
					<Spacer />
					<PoppinsText color={props.textColor} fontSize={props.size}>{props.name}</PoppinsText>
					<Spacer />
				</HStack>
			</Box>
		</TouchableOpacity>
	);
}
