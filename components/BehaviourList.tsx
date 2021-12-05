import React from "react";
import { View } from "native-base";
import { PoppinsText } from "./PoppinsText";
import { BehaviourItem } from "./BehaviourItem";

export const BehaviourList = () => {

  return (
		<View mt="7">
			<BehaviourItem name="Friendly with Kids" status={true} />
			<BehaviourItem name="Friendly with Adults" status={false} />
			<BehaviourItem name="Friendly with Cats" status={false} />
			<BehaviourItem name="Friendly with Other Pets" status={true} />
			<BehaviourItem name="Friendly with Loud Noises" status={false} />
		</View>
  );
};
