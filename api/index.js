import { firebase } from "../firebase/config";

class API {
	constructor() {
		this.db = firebase.firestore();
		this.setDbRef();
  }

	setDbRef() {
    this.dbRef = firebase.database().ref();
  }

	send(messages, sender, receiver) {
		const { _id, createdAt, text, user,} = messages[0]
		this.db.collection('chats').add({ _id, createdAt,  text, user, senderId: sender.id, receiverId: receiver.id})
	}
}

export default new API();
