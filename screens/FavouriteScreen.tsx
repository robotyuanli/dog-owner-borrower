import { Box, View, HStack, VStack, Divider } from "native-base";
import React, { useState } from "react";
import { useWindowDimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { TTNormsText } from "../components/TTNormsText";
import HeartActive from '../assets/svgs/heart-active.svg';
import HeartDisable from '../assets/svgs/heart-disable.svg';

const Yours = () => (
  <View style={{ flex: 1 }} />
);

const Received = () => (
  <View style={{ flex: 1 }} />
);

const Mutuals = () => (
  <View style={{ flex: 1 }} />
);

const renderScene = SceneMap({
  first: Yours,
  second: Received,
  third: Mutuals,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: 'white' }}
		activeColor="#FD814A"
		inactiveColor="#979EA6"
		renderLabel={({ route, focused, color }) => (
			<HStack alignItems="center">
				<TTNormsText fontSize={14} color={color} fontWeight="bold" mr="1">
					{route.title}
				</TTNormsText>
				{focused ? <HeartActive /> : <HeartDisable />}
			</HStack>
		)}
  />
);


export default function FavouriteScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Yours' },
    { key: 'second', title: 'Received' },
    { key: 'third', title: 'Mutuals' },
  ]);

  return (
    <Box backgroundColor="white" flex={1}>
      <VStack h="100%">
				<TTNormsText fontSize={34} color="#474747" fontWeight="bold" mt="2" mb="2" ml="3">
					Favourites
        </TTNormsText>
				<TabView
					renderTabBar={renderTabBar}
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={{ width: layout.width }}
					style={{elevation: 0}}
				/>
				<Divider />
        {/* <View
          flexGrow="1"
          height="10"
          alignItems="center"
          justifyContent="center"
          onTouchStart={() => {
            setIndex(0);
          }}
          backgroundColor={index == 0 ? "#f01437" : "#ff2643"}
        >
          <Text>Your ♡</Text>
        </View>
        <View
          flexGrow="1"
          height="10"
          alignItems="center"
          justifyContent="center"
          onTouchStart={() => {
            setIndex(1);
          }}
          backgroundColor={index == 1 ? "#f01437" : "#ff2643"}
        >
          <Text textAlign="center">♡ Receipts</Text>
        </View>
        <View
          flexGrow="1"
          height="10"
          alignItems="center"
          justifyContent="center"
          onTouchStart={() => {
            setIndex(2);
          }}
          backgroundColor={index == 2 ? "#f01437" : "#ff2643"}
        >
          <Text textAlign="center">♡ Mutuals</Text>
        </View> */}
      </VStack>
    </Box>
  );
}
