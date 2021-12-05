import * as React from "react";
import { Box, Center, Image, HStack, Spacer } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { PoppinsText } from "../components/PoppinsText";
import GradientButton from "react-native-gradient-buttons";
import { View, ImageBackground, StyleSheet } from "react-native";

export default function DogOwnerScreen() {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
			<ImageBackground source={require("../assets/images/back.png")} resizeMode="cover" style={styles.image}>
				<Box
					w="100%"
					flex={1}
					safeArea
					px="6"
					py="0"
				>
				<HStack mt="20">
					<Image
						alt="logo"
						width="40px"
						height="40px"
						resizeMode={"contain"}
						source={require("../assets/images/logo.png")}
					/>
					<Image
						ml="2"
						alt="logo"
						width="74px"
						height="37px"
						resizeMode={"contain"}
						source={require("../assets/images/logo-text.png")}
					/>
				</HStack>
				<Spacer />
				<Center>
					<Image
						mb="5"
						height="30px"
						alt="numbering"
						resizeMode={"contain"}
						source={require("../assets/images/numbering.png")}
					/>
				</Center>
				<PoppinsText
					mb="5"
					mx="2"
					color="white"
					fontSize={15}
					fontWeight="bold"
				>
					Want a Dog? Walk a Dog! is a community of thousands of members that connects doggie owners with people who don't have dogs but love them.
				</PoppinsText>
				<GradientButton
					radius={15}
					height={58}
					text="Join our community"
					textStyle={{ fontSize: 17 }}
					gradientBegin="#FC5C4C"
					gradientEnd="#FD814A"
					gradientDirection="diagonal"
					impactStyle='Light'
					onPressAction={() => navigation.navigate("SignUpScreen")}
				/>
				<HStack mb="10" mt="5" justifyContent="center">
					<PoppinsText
						color="white"
						fontSize={13}
					>
						Already a memeber?
					</PoppinsText>
					<PoppinsText
						ml="2"
						color="orange.400"
						fontSize={13}
						fontWeight="bold"
						onPress={() => navigation.navigate("SignInScreen")}
					>
						Log in
					</PoppinsText>
				</HStack>
				</Box>
			</ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
