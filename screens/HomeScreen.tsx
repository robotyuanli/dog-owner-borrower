import React, { useState, useEffect } from "react";
import { Box, View } from "native-base";
import { ImageBox } from "../components/ImageBox";
import { TTNormsText } from "../components/TTNormsText";
import { firebase } from "../firebase/config";
import { useAuth } from "../stores/useAuth";
import LogoSmall from '../assets/svgs/logo-small.svg';
import { StyleSheet, FlatList } from "react-native";
import api from '../api'

const HomeScreen = () => {
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
    <Box style={styles.container} backgroundColor="white">
			<View style={{marginLeft: 16, marginRight: 16}}>
				<LogoSmall />
				<TTNormsText fontSize={14} color="#979EA6" fontWeight="bold" mt="2" mb="5">
					Explore Dog Walkers
        </TTNormsText>
			</View>
      <FlatList
        data={users}
        style={{ margin: 0, paddingLeft: 16, paddingRight: 16 }}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginRight: index % 2 == 0 ? 8 : 0,
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
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
	gridContainer: {
		flex: 1,
	},
});
