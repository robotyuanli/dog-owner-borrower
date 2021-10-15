import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Text, Pressable, Spacer, HStack, theme } from 'native-base';

export function SettingsItem(props: any) {
	const navigation = useNavigation();
	const path = props.path == "" ? "SettingsScreen" : props.path;
  return (
		<Pressable
			onPress={() => {
				navigation.navigate(path);
			}}
		>
      {() => {
        return (
          <HStack alignItems="flex-start" mb="7">
						<Text fontSize={14} fontWeight="medium">
							{props.name}
						</Text>
						<Spacer />
						<FontAwesome
                name="angle-right"
                size={20}
                color={theme.colors.white}
              />
					</HStack>
        )
      }}
    </Pressable>
	);
}
