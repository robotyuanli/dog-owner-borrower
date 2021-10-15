import { Box, Button } from "native-base";
import * as React from "react";
import { ScreenBox } from "../components/ScreenBox";
import { supabase } from "../supabase";

export default function TabTwoScreen() {
  const fetchData = async () => {
    try {
      //   let res = await supabase.from('users').select(`
      //   email,
      //   niches (id, name),
      //   categories (id, name)
      // `)
      // console.log(res)
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScreenBox scrollable={false}>
      <Button mt="2" size="lg">
        Primary
      </Button>

      <Button mt="2" size="lg" colorScheme="secondary">
        Secondary
      </Button>
    </ScreenBox>
  );
}
