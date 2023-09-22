import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import { useFonts } from "expo-font";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import MapPin from "../Components/Icons/MapPin";
import Message from "../Components/Icons/Message";

const PostsScreen = () => {
  const [images, setImages] = useState([
    { id: "1", url: "../assets/images/exampleImage.jpg", name: "Ліс" },
    { id: "2", url: "../assets/images/exampleImage.jpg", name: "Ліс" },
    { id: "3", url: "../assets/images/exampleImage.jpg", name: "Ліс" },
    { id: "4", url: "../assets/images/exampleImage.jpg", name: "Ліс" },
  ]);

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

      <View>
        {images.map((image) => {
          return (
            <View style={styles.imgContainer}>
              <Image
                source={require("../assets/images/exampleImage.jpg")}
                style={styles.postImage}
              />
              <Text style={styles.postTitle}>{image.name}</Text>

              <View style={styles.imgInfo}>
                <View style={styles.comments}>
                  <Message />
                  <Text style={styles.imgInfoText}>0</Text>
                </View>
                <View style={styles.location}>
                  <MapPin />
                  <Text style={styles.imgInfoText}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
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
    marginBottom: 32,
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
    marginBottom: 32,
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
  imgInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    gap: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  imgInfoText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  comments: { display: "flex", flexDirection: "row", gap: 6 },
});

export default PostsScreen;
