import React, { useState, useEffect } from "react";
import { Box } from "native-base";
import { ImageBox } from "../components/ImageBox";
import { firebase } from "../firebase/config";
import { useAuth } from "../stores/useAuth";
import { StyleSheet, View, FlatList } from "react-native";
import api from '../api'

const SearchScreen = () => {
	const auth = useAuth()
	const user = auth.user
	const [users, setUsers] = useState()

  useEffect(() => {
		api.db.collection('users')
			.onSnapshot(snapshot => {
				const docs = snapshot.docs
				const res = docs.filter(doc => doc.data().id.localeCompare(user.id) != 0)
				if(res.length % 2 == 1) {
					res.push({name: "empty"})
				}
				setUsers(res)
			})
  }, []);

  return (
    <Box style={styles.container} backgroundColor="dark.600">
      <FlatList
        data={users}
        style={{ margin: 0, marginLeft: 8 }}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginRight: 8,
              marginTop: 8,
            }}
          >
            <ImageBox item={item}></ImageBox>
          </View>
        )}
        numColumns={2}
      />
    </Box>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
	gridContainer: {
		flex: 1,
	},
});
