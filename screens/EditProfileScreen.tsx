import React, { useState, useEffect } from "react";
import {
  Text,
  TextArea,
  VStack,
  Input,
  View,
  Spacer,
	Center,
} from "native-base";
import { Avatar } from 'react-native-elements'
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import { Pressable } from "react-native";
import { ScreenBox } from "../components/ScreenBox";
import { useAuth } from "../stores/useAuth";
import { firebase } from "../firebase/config";
import { useNavigation } from "@react-navigation/core";
import { PoppinsText } from "../components/PoppinsText";
import GradientButton from "react-native-gradient-buttons";

export default function EditProfileScreen() {
	const auth = useAuth()
	const user = auth.user
	const navigation = useNavigation();
	const [progress, setProgress] = useState('')
  const [avatar, setAvatar] = useState(user.avatar)
	const [name, setName] = useState(user.name)
	const [doggieContent, setDoggieContent] = useState(user.doggieContent)

	useEffect(() => {
    setAvatar(user.avatar)
		setDoggieContent(user.doggieContent)
  }, [])

	const ImageChoiceAndUpload = async () => {
    try {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert("Permission is required for use.");
          return;
        }
      }
      const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
          const actions = [];
          actions.push({ resize: { width: 300 } });
          const manipulatorResult = await ImageManipulator.manipulateAsync(
            result.uri,
            actions,
            {
              compress: 0.4,
            },
          );
          const localUri = await fetch(manipulatorResult.uri);
          const localBlob = await localUri.blob();
          const filename = user.id + new Date().getTime()
          const storageRef = firebase.storage().ref().child(`avatar/${user.id}/` + filename);
          const putTask = storageRef.put(localBlob);
          putTask.on('state_changed', (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(parseInt(progress) + '%')
          }, (error) => {
            console.log(error);
            alert("Upload failed.");
          }, () => {
            putTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              setProgress('')
              setAvatar(downloadURL)
            })
          })
        }
    } catch (e) {
        console.log('error', e.message);
        alert("The size may be too much.");
    }
  }

	const profileUpdate = () => {
    const data = {...user, avatar, name, doggieContent}
    const userRef = firebase.firestore().collection('users').doc(user.id)
    userRef.update(data)
		auth.updateAuth(data)
    navigation.goBack()
  }
	
  return (
		<ScreenBox backColor="purple.100">
			<VStack flex="1">
				<Center>
					<Avatar
						size="xlarge"
						rounded
						onPress={ImageChoiceAndUpload}
						source={{ uri: avatar }}
					/>
					<Text>{progress}</Text>
				</Center>
				<Input
					mt="3"
					mb="3"
					size="lg"
					type="text"
					variant="unstyled"
					placeholder="Name"
					value={name}
					onChangeText={(value) => setName(value)}
					placeholderTextColor="grey"
					backgroundColor="#F0F0F0"
				/>
				<PoppinsText color="dark.400" mt="3">About your doggie</PoppinsText>
				<TextArea
					mt="3"
					h={20}
					size="lg"
					variant="unstyled"
					backgroundColor="#F0F0F0"
					value={doggieContent}
					onChangeText={(value) => setDoggieContent(value)}
					placeholderTextColor="grey"
				/>
				<Spacer></Spacer>
				<View mb="5">
					<GradientButton
						radius={15}
						height={58}
						text="Save"
						textStyle={{ fontSize: 17 }}
						gradientBegin="#FC5C4C"
						gradientEnd="#FD814A"
						gradientDirection="diagonal"
						impactStyle='Light'
						onPressAction={profileUpdate}
					/>
				</View>
			</VStack>
		</ScreenBox>
  );
}
