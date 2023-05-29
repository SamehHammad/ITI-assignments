import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={() => alert("Welcome")} style={{marginLeft:100,fontSize:25}}>React Native Slider</Text>
      <ScrollView horizontal>
        <Image
          style={styles.stretch}
          source={{
            uri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
          }}
        ></Image>
        <Image
          style={styles.stretch}
          source={{
            uri: "https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg",
          }}
        ></Image>
        <Image
          style={styles.stretch}
          source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          }}
        ></Image>
        <Image
          style={styles.stretch}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIEnUkwQUdbyVfkutEwc9ZQDGz_f8IXu1R024nhc-&s",
          }}
        ></Image>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
  stretch: {
    width: 250,
    height: 350,
    resizeMode: "stretch",
    marginTop: 50,
    marginLeft: 10,
    borderRadius: 20,
  },
});
