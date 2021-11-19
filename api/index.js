import { firebase } from "../firebase/config";

class API {
	constructor() {
		this.db = firebase.firestore();
  }

	setFavourite(data) {
		const userRef = this.db.collection('users').doc(data.id)
    userRef.update(data.newProfile)
	}

	sendPasswordResetEmail(email) {
		return firebase.auth().sendPasswordResetEmail(email);
	}

	send(messages, roomId) {
		const { _id, createdAt, text, user,} = messages[0]
		this.db.collection('chats').add({ _id, createdAt,  text, user, roomId})
	}
}

export default new API();
