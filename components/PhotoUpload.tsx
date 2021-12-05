import React from "react";
import { Input, Center, View, HStack, Spacer } from "native-base";
import { PoppinsText } from "../components/PoppinsText";
import { useNavigation } from "@react-navigation/core";
import { Feather } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';
import Picture from '../assets/svgs/picture.svg';
import Back from '../assets/svgs/back.svg';

export const PhotoUpload = (props: any) => {
	const navigation = useNavigation();
	const title = props.title;

  return (
    <View {...props}>
			<Back onPress={() => navigation.goBack()}/>
			<Center marginTop="2">
				<Picture />
				<PoppinsText fontSize={15} color="#979EA6" mt={3}>
					{title}
				</PoppinsText>
			</Center>
			
			<HStack>
				<Spacer />
				<View style={styles.CircleShape} justifyContent="center" alignItems="center">
					<Feather name="edit-2" size={12} color="#FFFFFF" />
				</View>
			</HStack>
		</View>
  );
};
const styles = StyleSheet.create({
  CircleShape: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'black',
  },
});