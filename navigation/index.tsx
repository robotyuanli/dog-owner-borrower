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
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SearchScreen from "../screens/SearchScreen";
import MessageScreen from "../screens/MessageScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import PremiumScreen from "../screens/PremiumScreen";
import SignUpScreen from "../screens/SignUpScreen";
import OwnerBorrowerScreen from "../screens/OwnerBorrowerScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ContactScreen from "../screens/ContactScreen";
import HelpScreen from "../screens/HelpScreen";
import ChatScreen from "../screens/ChatScreen";
import NavbarScreen from "../screens/NavbarScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { SearchTitle } from "../components/SearchTitle";
import { SearchLeft } from "../components/SearchLeft";
import { SearchRight } from "../components/SearchRight";
import { PremiumBack } from "../components/PremiumBack";
import { NavbarRight } from "../components/NavbarRight";

import {
  OnboardingStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  AuthenticatedStackParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { useAuth } from "../stores/useAuth";
import { theme, useTheme, Text } from "native-base";

export default function Navigation() {
  const MyTheme = {
    // ...DefaultTheme,
    colors: {
      background: theme.colors.dark[600],
      text: theme.colors.white,
      border: theme.colors.purple[100],
      primary: theme.colors.yellow[500],
    },
  };

  return (
    <NavigationContainer linking={LinkingConfiguration}>
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
const AuthenticatedStack = createNativeStackNavigator<
  AuthenticatedStackParamList
>();

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
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="OwnerBorrowerScreen"
        component={OwnerBorrowerScreen}
      />
      <OnboardingStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </OnboardingStack.Navigator>
  );
}

function AuthenticatedNavigator() {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <AuthenticatedStack.Screen
        name="NavbarScreen"
				component={NavbarScreen}
        options={{
					title: "",
					headerStyle: {
						backgroundColor: "white"
					},
					headerTintColor: theme.colors.muted[400],
          headerRight: () => <NavbarRight />,
        }}
      />
      <AuthenticatedStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
					title: "",
					headerTintColor: "white",
					headerStyle: {
						backgroundColor: "#ff2643"
					},
        }}
      />
      <AuthenticatedStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          title: "Edit Profile",
					headerTintColor: "white",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#ff2643"
					},
        }}
      />
      <AuthenticatedStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          title: "Contact us",
					headerTintColor: "white",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#ff2643"
					},
        }}
      />
      <AuthenticatedStack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: "FAQ",
					headerTintColor: "white",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#ff2643"
					},
        }}
      />
      <AuthenticatedStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.user.name,
					headerTintColor: "white",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#ff2643"
					},
        })}
      />
    </AuthenticatedStack.Navigator>
  );
}

function RootNavigator() {
  let auth = useAuth();
  return (
    <Stack.Navigator>
			{auth?.user == null ? (
				<Stack.Screen
					name="Onboarding"
					component={OnboardingNavigator}
					options={{ headerShown: false }}
				/>
			) : (
				<Stack.Screen
					name="Root"
					component={AuthenticatedNavigator}
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
    <BottomTab.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff2643",
        },
      }}
    >
      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitle: () => <SearchTitle />,
          headerLeft: () => <SearchLeft />,
          headerRight: () => <SearchRight />,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="search"
              title="Search"
              color={focused ? theme.colors.rose[500] : theme.colors.dark[500]}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: "Messages",
          headerTitleAlign: "center",
          headerTintColor: "white",
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="envelope"
              title="Message"
              color={focused ? theme.colors.rose[500] : theme.colors.dark[500]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={() => ({
          headerStyle: {
            elevation: 0,
            backgroundColor: "#ff2643",
          },
          title: "Favourite",
          headerTitleAlign: "center",
          headerTintColor: "white",
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="heart"
              title="Favourite"
              color={focused ? theme.colors.rose[500] : theme.colors.dark[500]}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={({ route }) => ({
          headerStyle: {
            elevation: 0,
            backgroundColor: "#ff2643",
          },
          title: "Settings",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeft: () => <PremiumBack />,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="cog"
              title="Settings"
              color={
                focused ? theme.colors.rose[500] : theme.colors.dark[500]
              }
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
  title: string;
}) {
  const name = props.name;
  return (
    <>
      <FontAwesome size={18} style={{}} {...props} />
			<Text {...props}>{props.title}</Text>
    </>
  );
}
