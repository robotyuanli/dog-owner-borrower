
import React, { useState, useCallback, useEffect } from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useAuth } from "../stores/useAuth";
import { useRoute } from "@react-navigation/core";
import api from '../api'

export default function ChatScreen(props: any) {
	const [messages, setMessages] = useState([]);
	const auth = useAuth()
	const user = auth.user
	const route = useRoute()
	const receiver = route.params.user

	useEffect(() => {
		const unsubscribe = api.db.collection('chats')
			.where('senderId', '==', user.id)
			.where('receiverId', '==', receiver.id)
			.orderBy('createdAt', 'desc')
			.onSnapshot(snapshot => setMessages(
				snapshot.docs.map(doc => ({
						_id: doc.data()._id,
						createdAt: doc.data().createdAt.toDate(),
						text: doc.data().text,
						user: doc.data().user,
				}))
		));
  }, [])

	const onSend = useCallback((messages = []) => {
		setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    api.send(messages, user, receiver)
  }, [])

  return (
		<View style={styles.container}>
			<GiftedChat
				messages={messages}
				onSend={messages => onSend(messages)}
				user={{
					_id: user.id,
					name: user.name,
					avatar: user.avatar
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
