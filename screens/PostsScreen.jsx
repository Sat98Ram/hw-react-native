import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useFonts } from "expo-font";

const PostsScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userBar}>
        <View style={styles.avatar}>
          <Image source={require("../assets/images/exampleAvatar.jpg")} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>

      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/images/exampleImage.jpg")}
          style={styles.postImage}
        />
        <Text style={styles.postTitle}>Ліс</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  imgContainer: {
    marginTop: 32,
  },
  postImage: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 8,
  },
  avatar: {
    backgroundColor: "#000",
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userBar: {
    flexDirection: "row",
    gap: 8,
  },
  userInfo: {
    justifyContent: "center",
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
  },
});

export default PostsScreen;
