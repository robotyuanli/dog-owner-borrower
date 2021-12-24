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
	const [newUser, setNewUser] = useState({});

	useEffect(() => {
		async function localStorageData(){
				// const storagedUser = await AsyncStorage.getItem("user")

				// if (storagedUser) {
				// 		setUser(storagedUser)
				// }
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
          .then(document => {
            if (!document.exists) {
              alert("User does not exist anymore.")
              return;
            }
						const userData = document.data();
						setUser(userData)
						// AsyncStorage.setItem("user", userData)
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
			setUser(null)
		})
	}

	function updateAuth(user: any) {
		setUser(user)
	}

	function saveUser(data: any, step: any) {
		switch(step) {
			case 1:
				setNewUser({...newUser, email: data.email, fullName: data.fullName, password: data.password})
				break;
			case 2:
				setNewUser({...newUser, type: data.type})
				break;
			case 3:
				setNewUser({...newUser, address: data.address, postalCode: data.postalCode, suite: data.suite})
				break;
		}
	}

  // Return the user object and auth methods
  return {
    user,
		newUser,
		signIn,
		signOut,
		updateAuth,
		saveUser,
  };
}