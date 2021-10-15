import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Flex, Text, theme } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { ScreenBox } from "../components/ScreenBox";

const NOTOFICATIONS = [
  {
    id: 0,
    name: "Tech",
    description: "Is this really what working as a startup is like?",
    date: "yesterday",
  },
  {
    id: 1,
    name: "Tech",
    description:
      "I was in denial, Maybe still I am but I understand why Amazon gets the hate.",
    date: "yesterday",
  },
  {
    id: 2,
    name: "Tech",
    description: "Is this really what working as a startup is like?",
    date: "yesterday",
  },
  {
    id: 3,
    name: "Tech",
    description:
      "I was in denial, Maybe still I am but I understand why Amazon gets the hate.",
    date: "yesterday",
  },
];

export default function NotificationsScreen() {
  return (
    <ScreenBox scrollable={false}>
      {NOTOFICATIONS.map((item) => (
        <Item notification={item} />
      ))}
    </ScreenBox>
  );
}

function Item(props: any) {
  return (
    <TouchableOpacity>
      <Flex flexDirection="row" mb={8}>
        <FontAwesome name="bell" size={16} color={theme.colors.yellow[300]} />
        <Box ml={4}>
          <Text fontSize={12}>{props.notification.name}</Text>
          <Text fontSize={14} color={theme.colors.white}>
            {props.notification.description}
          </Text>
          <Flex flexDirection="row">
            <Text fontSize={12} mr={2}>
              Topics
            </Text>
            <Text fontSize={10}>{props.notification.date}</Text>
          </Flex>
        </Box>
      </Flex>
    </TouchableOpacity>
  );
}
