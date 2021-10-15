/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import SignInScreen from "../screens/SignInScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import SuggestionScreen from "../screens/SuggestionScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  OnboardingStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  AuthenticatedStackParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import SignUpScreen from "../screens/SignUpScreen";
import DogOwnerScreen from "../screens/DogOwnerScreen";
import DogBorrowerScreen from "../screens/DogBorrowerScreen";
import { useAuth } from "../stores/useAuth";
import { theme, useTheme } from "native-base";
import CustomizeTopicsScreen from "../screens/CustomizeTopicsScreen";
import PushNotificationsSettingsScreen from "../screens/PushNotificationsSettingsScreen";

export default function Navigation() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      background: theme.colors.purple[100],
      text: theme.colors.white,
      border: theme.colors.purple[100],
      primary: theme.colors.yellow[500],
    },
  };

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const AuthenticatedStack =
  createNativeStackNavigator<AuthenticatedStackParamList>();

function OnboardingNavigator() {
  return (
    <OnboardingStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.colors.purple[100],
				},
				headerTitle: "",
				headerBackTitle: "",
				headerTintColor: theme.colors.dark[400],
			}}
		>
			<OnboardingStack.Screen
				name="SignUpScreen"
				component={SignUpScreen}
				options={{ headerShown: false }}
			/>
			<OnboardingStack.Screen
        name="DogOwnerScreen"
        component={DogOwnerScreen}
      />
			<OnboardingStack.Screen
        name="DogBorrowerScreen"
        component={DogBorrowerScreen}
      />
      <OnboardingStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </OnboardingStack.Navigator>
  );
}

function AuthenticatedNavigator() {
  return (
    <AuthenticatedStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.blueGray[800],
        },
        headerBackTitle: "",
        headerTintColor: "#fff",
      }}
    >
      <AuthenticatedStack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <AuthenticatedStack.Screen
        name="PushNotificationsSettingsScreen"
        component={PushNotificationsSettingsScreen}
        options={{
          title: "Push Notifications",
        }}
      />
      <AuthenticatedStack.Screen
        name="CustomizeTopicsScreen"
        component={CustomizeTopicsScreen}
        options={{
          title: "Customize Topics",
        }}
      />
      <AuthenticatedStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          title: "Change Password",
        }}
      />
      <AuthenticatedStack.Screen 
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          title: "Edit Profile",
        }}
      />
      <AuthenticatedStack.Screen 
        name="SuggestionScreen"
        options={{
					title: "Suggest a Feature",
				}}
      >
					{props => <SuggestionScreen 
											label="Request a festure"
											placeholder="I would like to see a feature"
											hint="Is there a feature you'd like to see on the app? Please send us a request"
										/>
					}
			</AuthenticatedStack.Screen>
    </AuthenticatedStack.Navigator>
  );
}

function RootNavigator() {
  let auth = useAuth();
  console.log(auth);
  return (
    <Stack.Navigator>
      {auth?.loggedIn ? (
        <Stack.Screen
          name="Root"
          component={AuthenticatedNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Onboarding"
          component={OnboardingNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="SettingsScreen" screenOptions={{}}>
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="code"
              color={focused ? theme.colors.yellow[300] : theme.colors.white}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => ({
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="gear"
              color={focused ? theme.colors.yellow[300] : theme.colors.white}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={() => ({
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="bell"
              color={focused ? theme.colors.yellow[300] : theme.colors.white}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{}} {...props} />;
}
