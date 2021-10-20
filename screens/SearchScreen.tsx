import React, { useState } from "react";
import { Box } from "native-base";
import { ImageBox } from "../components/ImageBox";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";

const SearchScreen = () => {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(10)).map((v, i) => {
      return { id: i, src: "https://wallpaperaccess.com/full/317501.jpg" };
    });
    setDataSource(items);
  }, []);

  return (
    <Box style={styles.container} backgroundColor="dark.600">
      <FlatList
        data={dataSource}
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
});
