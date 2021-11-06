import React, { useState, useEffect } from "react";
import {
  Text,
  TextArea,
  VStack,
  Avatar,
  Input,
  Button,
  Spacer,
	Center,
} from "native-base";
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import { Pressable } from "react-native";
import { ScreenBox } from "../components/ScreenBox";
import { useAuth } from "../stores/useAuth";
import { firebase } from "../firebase/config";
import { useNavigation } from "@react-navigation/core";

export default function EditProfileScreen() {
	const auth = useAuth();
	const user = auth.user;
	const navigation = useNavigation();
	const [progress, setProgress] = useState('')
  const [avatar, setAvatar] = useState(user.avatar)

	useEffect(() => {
    setAvatar(user.avatar)
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
    const data = {...user, avatar}
    const userRef = firebase.firestore().collection('users').doc(user.id)
    userRef.update(data)
    navigation.goBack()
  }
	
  return (
		<ScreenBox backColor="purple.100">
			<VStack flex="1">
				<Center>
					<Pressable onPress={ImageChoiceAndUpload}>
						<Avatar
							size="xl"
							source={{
								uri: avatar,
							}}
						/>
					</Pressable>
					<Text>{progress}</Text>
				</Center>
				<Input
					mt="3"
					type="text"
					placeholder="Name"
					fontSize={12}
					placeholderTextColor="grey"
				/>
				<Text color="dark.400" mt="3">About your doggie</Text>
				<TextArea
					h={20}
					fontSize={15}
					placeholderTextColor="grey"
				/>
				<Spacer></Spacer>
				<Button
					mt="5"
					mb="5"
					size="lg"
					rounded="20px"
					colorScheme="rose"
					_text={{ color: "white" }}
					onPress={profileUpdate}
				>
					Save
				</Button>
			</VStack>
		</ScreenBox>
  );
}
