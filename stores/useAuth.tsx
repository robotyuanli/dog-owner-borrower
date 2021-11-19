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
  const [distance, setDistance] = useState(10)
	const [weekends, setWeekends] = useState(false)
	const [weekDay, setWeekDay] = useState(false)
	const [weekNight, setWeekNight] = useState(false)
	const [walk, setWalk] = useState(false)
	const [dayNight, setDayNight] = useState(false)
	const [week, setWeek] = useState(false)

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

	function resetFilters() {
		setDistance(10)
		setWeekends(false)
		setWeekDay(false)
		setWeekNight(false)
		setWalk(false)
		setDayNight(false)
		setWeek(false)
	}

	function updateAuth(user: any) {
		setUser(user)
	}

  // Return the user object and auth methods
  return {
    user,
		distance,
		weekends, 
		weekDay,
		weekNight,
		walk,
		dayNight,
		week,
		signIn,
		signOut,
		setWeekends,
		resetFilters,
		updateAuth,
  };
}