import * as React from 'react';
import {Text} from "native-base";

export function PoppinsText(props: any) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins' }]} />;
}
