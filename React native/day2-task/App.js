import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Styles";
import { useCallback, useState } from "react";
import Box from "./Box/Box";
import { COLORS } from "./Colors";

export default function App() {
  const [userName, setUserName] = useState("sameh");
  const handleChange = useCallback((e) => {
    setUserName(e);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>
        Here are some boxes different colors
      </Text>
      <FlatList
        data={COLORS}
        renderItem={({ item }) => <Box {...item} />}
        keyExtractor={(data) => data.rgb}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}
