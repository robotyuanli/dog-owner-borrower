import React, { useState, useCallback, useEffect } from "react";
import { Center, VStack, Spacer } from "native-base";
import { PoppinsText } from "../components/PoppinsText";
import { ScreenBox } from "../components/ScreenBox";
import GradientButton from "react-native-gradient-buttons";
import { useNavigation } from "@react-navigation/core";
import Check from "../assets/svgs/check.svg";

export default function AllSetScreen(props: any) {
  const navigation = useNavigation();

  const onNext = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScreenBox>
      <VStack height="100%">
        <Center mt="20">
          <PoppinsText fontSize={34} color="#474747" mb="10" fontWeight="bold">
            You’re all Set
          </PoppinsText>
          <Check />
        </Center>
        <Spacer />
        <GradientButton
          radius={15}
          height={58}
          text="Let's Go"
          textStyle={{ fontSize: 17 }}
          gradientBegin="#FC5C4C"
          gradientEnd="#FD814A"
          gradientDirection="diagonal"
          impactStyle="Light"
          style={{ marginBottom: 29 }}
          onPressAction={onNext}
        />
      </VStack>
    </ScreenBox>
  );
}
