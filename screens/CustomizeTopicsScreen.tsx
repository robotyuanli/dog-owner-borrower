import { Box, Button, Heading, theme } from "native-base";
import * as React from "react";
import { TopicsButton } from "../components/TopicsButton";
import { supabase } from "../supabase";
import { useNavigation } from "@react-navigation/native";

export default function CustomizeTopicsScreen() {
  const navigation = useNavigation();

  const [dataList, setDataList] = React.useState([]);
  const [checkboxes, setCheckboxes] = React.useState([]);

  const fetchData = async () => {
    try {
      let { data, error } = await supabase.from("categories").select();
      setDataList(data);
      if (error) {
        console.log(error);
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const toggleCheckbox = (id, index) => {
    const checkData = [...checkboxes];
    checkData[index].checked = !checkData[index]?.checked;
    setCheckboxes(checkData);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    setCheckboxes(dataList);
  }, [dataList]);

  return (
    <Box
      safeArea
      p="6"
      py="8"
      w="100%"
      mx="auto"
      flex="1"
      backgroundColor="blueGray.800"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Heading fontSize={24} mt="2" mb="5">
          For you
        </Heading>
        <Box
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {checkboxes?.map((cb, index) => {
            return (
              <TopicsButton
                text={cb?.name}
                isChecked={cb.checked}
                id={cb.id}
                index={index}
                onClick={() => toggleCheckbox(cb.id, index)}
                key={index}
              />
            );
          })}
        </Box>
      </Box>
      <Button
        mt="2"
        colorScheme="primary"
        size="lg"
        onPress={navigation.goBack}
        _text={{ color: theme.colors.coolGray[800] }}
      >
        Update my Topics
      </Button>
    </Box>
  );
}
