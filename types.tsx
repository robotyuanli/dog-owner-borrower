/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type OnboardingStackParamList = {
  WelcomeScreen: undefined;
	UserTypeScreen: undefiend;
  SignInScreen: undefined;
	SignUpScreen: undefined;
	OwnerBorrowerScreen: undefined;
	ForgotPasswordScreen: undefined;
	EditDogProfileScreen: undefined;
	EditOwnerProfileScreen: undefined;
	EditBorrowerProfileScreen: undefined;
	AllSetScreen: undefined;
};

export type AuthenticatedStackParamList = {
  Root: undefined;
  EditProfileScreen: undefined;
	NavbarScreen: undefined;
	ProfileScreen: undefined,
	ContactScreen: undefined,
	HelpScreen: undefined,
	ChatScreen: undefined,
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Onboarding: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
	HomeScreen: undefined;
  MessageScreen: undefined;
  FavouriteScreen: undefined;
	SettingsScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type ComponentProps = {
		children?: JSX.Element | JSX.Element[];
}

export type ItemProps = {
		children?: JSX.Element | JSX.Element[];
		item: any;
};
