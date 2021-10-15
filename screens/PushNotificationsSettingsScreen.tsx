import { Heading } from "native-base";
import * as React from "react";

import { useAuth } from "../stores/useAuth";
import { NotificationItem } from "../components/NotificationItem";
import { ScreenBox } from "../components/ScreenBox";

export default function PushNotificationsSettingsScreen() {
  let auth = useAuth();
  return (
    <ScreenBox scrollable={false}>
      <NotificationItem
        name="Enable Push Notifications"
        status={true}
      ></NotificationItem>
      <Heading fontSize={18} mb="5">
        Account
      </Heading>
      <NotificationItem
        name="Enable Push Notifications"
        status={true}
      ></NotificationItem>
      <NotificationItem
        name="Enable Push Notifications"
        status={true}
      ></NotificationItem>
      <NotificationItem
        name="Enable Push Notifications"
        status={true}
      ></NotificationItem>
      <NotificationItem
        name="Enable Push Notifications"
        status={false}
      ></NotificationItem>
    </ScreenBox>
  );
}
