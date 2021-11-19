import React, { useState } from "react";
import { Text, Box, HStack, Spacer, Divider, Slider, Button, VStack, View } from "native-base";
import { NavbarItem } from "../components/NavbarItem";
import { useAuth } from "../stores/useAuth";

const NavbarScreen = () => {
	const auth = useAuth()
	const {distance} = auth

  return (
			<Box p="5" backgroundColor="white" h="100%">
				<VStack h="100%">
					<View accessible={true} accessibilityLabel="Tap me!" accessibilityHint="Navigates to the previous screen">
						<HStack>
							<Text color="dark.300" fontSize={16}>Search distance:</Text>
							<Spacer></Spacer>
							<Text color="rose.500">{distance} km</Text>
						</HStack>
						<Slider
							mt="5"
							defaultValue={70}
							colorScheme="rose"
						>
							<Slider.Track>
								<Slider.FilledTrack />
							</Slider.Track>
							<Slider.Thumb />
						</Slider>
						<Divider w="100%" mt="5" mb="5" />
						
						<Text color="dark.300" fontSize={16}>Availability:</Text>
						<NavbarItem item={{name: "Weekends"}} />
						<NavbarItem item={{name: "Weekdays night"}} />
						<NavbarItem item={{name: "Weekdays days"}} />
						
						<Divider w="100%" mt="5" mb="5" />

						<Text color="dark.300" fontSize={16}>Type of Search:</Text>
						<NavbarItem item={{name: "One walk"}} />
						<NavbarItem item={{name: "One day + night"}} />
						<NavbarItem item={{name: "Week / weekends"}} />
					</View>
					<Spacer></Spacer>
					<Button
						mt="5"
						size="lg"
						rounded="20px"
						colorScheme="rose"
						_text={{ color: "white" }}
					>
						To apply
					</Button>		
				</VStack>
			</Box>
	);
};
export default NavbarScreen;

