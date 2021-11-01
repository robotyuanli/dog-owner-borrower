import React, { useState, useEffect, useContext, createContext } from "react";
import { firebase } from "../firebase/config";
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
function useAuthProvider() {
  const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		async function localStorageData(){
				const storagedToken = await AsyncStorage.getItem('token')

				if (storagedToken) {
						setToken(storagedToken)
				}
		}
		localStorageData()
	}, [])

	function signIn(email, password){    
		firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
				const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.")
              return;
            }
						setToken(uid)
						AsyncStorage.setItem('token', uid)
					})
          .catch(error => {
            alert(error)
          });
      })
      .catch(error => {
        alert(error)
      })
	}

	function signOut(){
		AsyncStorage.clear().then( () => {
			setToken(null)
		})
	}

  // Return the user object and auth methods
  return {
    user,
    token,
		signIn,
		signOut,
  };
}