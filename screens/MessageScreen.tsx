import React, { useState } from "react";
import { Text } from "native-base";
import { FlatList, StyleSheet, View } from 'react-native';
import { MessageItem } from "../components/MessageItem";
import { ScreenBox } from "../components/ScreenBox";

export default function MessageScreen() {
	const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(5)).map((v, i) => {
      return { id: i, name: "Emprunte Mon Toutou", message: "Borrow Mon Toutou Welcome to your mailbox", date: "Aug 31" };
    });
    setDataSource(items);
	}, []);
	
  return (
			<FlatList
        data={dataSource}
        renderItem={({item}) => <MessageItem item={item} />}
      />
	);
}
