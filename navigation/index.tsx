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
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import UserTypeScreen from "../screens/UserTypeScreen";
import OwnerBorrowerScreen from "../screens/OwnerBorrowerScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import EditDogProfileScreen from "../screens/EditDogProfileScreen";
import EditOwnerProfileScreen from "../screens/EditOwnerProfileScreen";
import AllSetScreen from "../screens/AllSetScreen";
import EditBorrowerProfileScreen from "../screens/EditBorrowerProfileScreen";
import ContactScreen from "../screens/ContactScreen";
import FAQScreen from "../screens/FAQScreen";
import ChatScreen from "../screens/ChatScreen";
import NavbarScreen from "../screens/NavbarScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { HeaderLeft } from "../components/HeaderLeft";
import { HeaderRight } from "../components/HeaderRight";
import { NavbarRight } from "../components/NavbarRight";
import { TouchableOpacity, StyleSheet } from "react-native";
import HomeActive from '../assets/svgs/home-active.svg';
import ChatActive from '../assets/svgs/chat-active.svg';
import LoveActive from '../assets/svgs/love-active.svg';
import SettingsActive from '../assets/svgs/settings-active.svg';
import Home from '../assets/svgs/home.svg';
import Chat from '../assets/svgs/chat.svg';
import Love from '../assets/svgs/love.svg';
import Settings from '../assets/svgs/settings.svg';
import Dog from '../assets/svgs/dog.svg';

import {
  OnboardingStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  AuthenticatedStackParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { useAuth } from "../stores/useAuth";
import { theme, useTheme, Text, View } from "native-base";

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
        name="UserTypeScreen"
        component={UserTypeScreen}
				options={{
					title: "",
					headerStyle: {
						backgroundColor: "white"
					},
        }}
      />
      <OnboardingStack.Screen
        name="OwnerBorrowerScreen"
        component={OwnerBorrowerScreen}
      />
      <OnboardingStack.Screen
        name="SignInScreen"
        component={SignInScreen}
				options={{
					title: "",
					headerStyle: {
						backgroundColor: "white"
					},
        }}
      />
      <OnboardingStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
				options={{
					title: "",
					headerStyle: {
						backgroundColor: "white"
					},
        }}
      />
      <OnboardingStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
				options={{
					title: "",
					headerStyle: {
						backgroundColor: "white"
					},
        }}
      />
      <OnboardingStack.Screen
        name="EditDogProfileScreen"
        component={EditDogProfileScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="EditOwnerProfileScreen"
        component={EditOwnerProfileScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="EditBorrowerProfileScreen"
        component={EditBorrowerProfileScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="AllSetScreen"
        component={AllSetScreen}
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
					headerStyle: {
						backgroundColor: "#white"
					},
        }}
      />
      <AuthenticatedStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          title: "Edit Profile",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#white"
					},
        }}
      />
      <AuthenticatedStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          title: "",
					headerStyle: {
						backgroundColor: "#white"
					},
        }}
      />
      <AuthenticatedStack.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={{
          title: "",
					headerStyle: {
						backgroundColor: "#white"
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
      initialRouteName="HomeScreen"
			tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          title: "Home",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        })}
      />
      <BottomTab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: "Chat",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}
      />
			<BottomTab.Screen
        name="Dog"
        component={MessageScreen}
        options={{
          title: "Dog",
        }}
      />
      <BottomTab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={() => ({
          title: "Love",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        })}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({ route }) => ({
          title: "Settings",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeft: () => <HeaderLeft />,
        })}
      />
    </BottomTab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.shadowContainerStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center" }}
          >
						{options.title == "Home" && isFocused && <HomeActive />}
						{options.title == "Chat" && isFocused && <ChatActive />}
						{options.title == "Love" && isFocused && <LoveActive />}
						{options.title == "Settings" && isFocused && <SettingsActive />}
						{options.title == "Home" && !isFocused && <Home />}
						{options.title == "Chat" && !isFocused && <Chat />}
						{options.title == "Love" && !isFocused && <Love />}
						{options.title == "Settings" && !isFocused && <Settings />}
						{options.title == "Dog" && 
							<View style={styles.dogContainer}>
								<Dog />
							</View>
						}
          </TouchableOpacity>
        );
      })}
		
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainerStyle: {   //<--- Style with elevation
		flexDirection: 'row',
		backgroundColor:"#FFFFFF",
		height:91,
		borderRadius:50,
		justifyContent:"center",
		alignItems:"center",
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10	,
  },
	dogContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: -60,
		width: 65,
		height: 65,
		borderRadius: 65 / 2,
		backgroundColor: '#FFAC5F'
	},
})
