import { View, Text, Image, StyleSheet } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/exampleImage.jpg")}
        style={styles.postImage}
      />

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
});

export default CommentsScreen;
