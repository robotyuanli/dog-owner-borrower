import * as React from "react";
import {
  Text,
  VStack,
  TextArea,
  Button,
  Spacer,
} from "native-base";
import { ScreenBox } from "../components/ScreenBox";

export default function SuggestionScreen(props: any) {
  return (
    <ScreenBox scrollable={false}>
      <VStack space={3} h="100%">
				<Text color="light.200" fontSize="16">
					{props.label}
        </Text>
				<TextArea
					numberOfLines={5}
					placeholder={props.placeholder}
					fontSize="15"
					placeholderTextColor="light.200"
				/>
				<Text color="light.400" alignSelf="flex-start" fontSize={13} mt="1">
					{props.hint}
        </Text>
				<Spacer />
        <Button
					mb="5"
          size="lg"
          colorScheme="primary"
          _text={{ color: "coolGray.700" }}
        >
          Send Request
        </Button>
      </VStack>
    </ScreenBox>
  );
}
