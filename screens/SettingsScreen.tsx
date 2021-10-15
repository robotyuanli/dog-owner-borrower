import {
  Box,
  Button,
  Text,
  ScrollView,
  Image,
  HStack,
  Heading,
  theme,
} from "native-base";
import * as React from "react";

import { supabase } from "../supabase";
import { useAuth } from "../stores/useAuth";
import { RootTabScreenProps } from "../types";
import { SettingsItem } from "../components/SettingsItem";
import { ScreenBox } from "../components/ScreenBox";

export default function SettingsScreen({
  navigation,
}: RootTabScreenProps<"SettingsScreen">) {
  let auth = useAuth();
  return (
		<ScreenBox scrollable={true} mt="8">
			<Text color="muted.300">{auth.user.email}</Text>
			<Heading fontSize={24} mb="3">
				luckythrifter
			</Heading>
			<Box
				p="3"
				rounded="lg"
				overflow="hidden"
				borderColor="coolGray.700"
				borderWidth="1"
				_web={{
					shadow: 2,
					borderWidth: 0,
				}}
			>
				<HStack alignItems="center">
					<Image
						alt="image"
						size={30}
						source={require("../assets/images/shield-unlock.png")}
					/>
					<Heading fontSize={18} ml="2">
						Verify your account to unlock
					</Heading>
				</HStack>
				<HStack alignItems="center" mt="2">
					<Image
						alt="image"
						size={5}
						source={require("../assets/images/sm-check-circle.png")}
					/>
					<Text ml="2">Salary comparison tool</Text>
				</HStack>
				<HStack alignItems="center" mt="2">
					<Image
						alt="image"
						size={5}
						source={require("../assets/images/sm-check-circle.png")}
					/>
					<Text ml="2">View poll requests</Text>
				</HStack>
				<HStack alignItems="center" mt="2">
					<Image
						alt="image"
						size={5}
						source={require("../assets/images/sm-check-circle.png")}
					/>
					<Text ml="2">Post Content and DOM</Text>
				</HStack>
				<Button
					colorScheme="primary"
					mt="3"
					size="xs"
					width="150"
					_text={{
						color: theme.colors.coolGray[800],
						fontSize: theme.fontSizes.xs,
					}}
				>
					Connect Instagram
				</Button>
			</Box>

			<Heading fontSize={18} mt="6" mb="5">
				Account
			</Heading>
			<SettingsItem name="Customize Topics" path="CustomizeTopicsScreen" />
			<SettingsItem name="Edit Profile" path="EditProfileScreen" />
			<SettingsItem name="Bookmarks" path="" />
			<SettingsItem name="Salary Comparision" path="" />

			<Heading fontSize={18} mt="2" mb="5">
				App Settings
			</Heading>
			<SettingsItem name="Change Password" path="ChangePasswordScreen" />
			<SettingsItem
				name="Push Notification"
				path="PushNotificationsSettingsScreen"
			/>

			<Heading fontSize={18} mt="2" mb="5">
				About
			</Heading>
			<SettingsItem name="Suggest a Feature" path="SuggestionScreen" />
			<SettingsItem name="Terms of Use" path="" />
			<SettingsItem name="Privacy Policy" path="" />
			<SettingsItem name="Version" path="" />

			<Button
				_text={{ color: theme.colors.coolGray[500] }}
				colorScheme="secondary"
				mt="2"
				size="lg"
				onPress={() => {
					supabase.auth.signOut();
				}}
			>
				Sign out
			</Button>
		</ScreenBox>
  );
}
