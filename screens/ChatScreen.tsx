
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useAuth } from "../stores/useAuth";
import { useRoute } from "@react-navigation/core";
import { firebase } from "../firebase/config";
import api from '../api'

export default function ChatScreen(props: any) {
	const [messages, setMessages] = useState([]);
	const auth = useAuth()
	const user = auth.user
	const route = useRoute()
	const receiver = route.params.user

	const createRoom = async () => {
		const res = await api.db.collection('rooms')
			.where('senderId', '==', user.id)
			.where('receiverId', '==', receiver.id)
			.get();
		const res2 = await api.db.collection('rooms')
			.where('senderId', '==', receiver.id)
			.where('receiverId', '==', user.id)
			.get();
		if(res.docs.length === 0 && res2.docs.length === 0) {
			firebase.firestore().collection('rooms')
				.add({ senderId: user.id, receiverId: receiver.id})
				.then((docRef) => {
					return docRef.id
				})
		}
		else if(res.docs.length > 0) {
			return res.docs[0].id
		}
		else if(res2.docs.length > 0) {
			return res2.docs[0].id
		}
	}

	useEffect(() => {
		async function fetchData() {
			this.roomId = await createRoom();
			api.db.collection('chats')
				.where('roomId', '==', this.roomId)
				.orderBy('createdAt', 'desc')
				.onSnapshot(snapshot => setMessages(
					snapshot.docs.map(doc => ({
							_id: doc.data()._id,
							createdAt: doc.data().createdAt.toDate(),
							text: doc.data().text,
							user: doc.data().user,
					}))
			));
		}
		fetchData()
  }, [])

	const onSend = useCallback((messages = []) => {
		setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
		api.send(messages, this.roomId)
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
