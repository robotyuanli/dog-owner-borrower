import * as React from "react";
import {
  Text,
  TextArea,
  VStack,
  FormControl,
  Input,
  Button,
  Spacer,
} from "native-base";
import { ScreenBox } from "../components/ScreenBox";

export default function EditProfileScreen() {
  return (
		<ScreenBox scrollable={false}>
			<VStack space={5} h="100%">
				<FormControl>
					<Text color="light.200" fontSize="16" mb={1}>
						Username
					</Text>
					<Input
						type="text"
						placeholder="Username"
						fontSize={15}
						placeholderTextColor="white"
					/>
					<Text color="light.400" alignSelf="flex-start" fontSize={13} mt="1">
						You can change your username once a day
					</Text>
				</FormControl>
				<FormControl>
					<Text color="light.200" fontSize="16" mb={1}>
						Location
					</Text>
					<Input
						type="text"
						placeholder="Location"
						fontSize={15}
						placeholderTextColor="white"
					/>
					<Text color="light.400" alignSelf="flex-start" mt="1">
						Add your location so we can show posts by people nearby you
					</Text>
				</FormControl>
				<FormControl>
					<Text color="light.200" fontSize="16" mb={1}>
						Years you’ve been creating
					</Text>
					<Input
						keyboardType="numeric"
						placeholder="Years of Experiences"
						fontSize={15}
						placeholderTextColor="white"
					/>
					<Text color="light.400" alignSelf="flex-start" mt="1">
						Share with others how long have you been creating content
					</Text>
				</FormControl>
				<FormControl>
					<Text color="light.200" fontSize="16" mb={1}>
						Bio
					</Text>
					<TextArea
						h={20}
						placeholder="Tell us about yourself"
						fontSize={15}
						placeholderTextColor="white"
					/>
					<Text color="light.400" alignSelf="flex-start" mt="1">
						Tell others about yourself
					</Text>
				</FormControl>
				<Spacer />
				<Button mb="5" bgColor="coolGray.600" _text={{ color: "light.400" }} size="lg">
					Update Profile
				</Button>
			</VStack>
		</ScreenBox>
  );
}
