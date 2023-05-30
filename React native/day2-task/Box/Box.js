import { View, Text } from "react-native";
import React from "react";
import { styles } from "../Styles";

export default function Box({ name, hex }) {
  return (
    <View style={[styles.box, { backgroundColor: hex }]} >
      <Text style={styles.textColor} >
        {name} <Text> ({hex})</Text>
      </Text>
    </View>
  );
}
