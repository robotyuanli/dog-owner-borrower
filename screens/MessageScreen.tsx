import React, { useState, useEffect } from "react";
import { Input, HStack, Box } from "native-base";
import { FlatList } from 'react-native';
import { MessageItem } from "../components/MessageItem";
import { TTNormsText } from "../components/TTNormsText";
import Search from '../assets/svgs/search.svg';
import Filter from '../assets/svgs/filter.svg';
import api from '../api'

export default function MessageScreen() {
	const [users, setUsers] = useState()

	useEffect(() => {
		api.db.collection('users')
			.onSnapshot(snapshot => {
				const docs = snapshot.docs
				setUsers(docs)
			})
  }, []);
	
  return (
			<Box backgroundColor="white" flex={1}>
				<TTNormsText fontSize={34} color="#474747" fontWeight="bold" mt="2" mb="2" ml="3">
					Chat
        </TTNormsText>
				<HStack borderRadius="10" backgroundColor="#F0F0F0" alignItems="center" mx="3" mb="10" px="4">
					<Search />
					<Input variant="unstyled" size="lg" backgroundColor="#F0F0F0" flex="1" placeholder="Search..." />
					<Filter />
				</HStack>
				<FlatList
					data={users}
					renderItem={({item}) => <MessageItem item={item} />}
				/>
			</Box>
	);
}
