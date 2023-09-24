import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

import background1x from "../assets/images/bg1x.jpg";
import background2x from "../assets/images/bg2x.jpg";
import MapPin from "../Components/Icons/MapPin";
import MessageFilled from "../Components/Icons/MessageFilled";

const ProfileScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={(background1x, background2x)}
        style={styles.background}
      >
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/exampleAvatar.jpg")}
            style={styles.avatarProfile}
          />
          <Text style={styles.userName}>Natali Romanova</Text>

          {/* <Image source={require("../assets/images/exampleImage.jpg")} /> */}

          <View>
            <Image
              source={require("../assets/images/exampleImage.jpg")}
              style={styles.itemImage}
            />
            <Text style={styles.postTitle}>Ліс</Text>

            <View style={styles.imgInfo}>
              <TouchableOpacity
                style={styles.comments}
                onPress={() => navigation.navigate("CommentsScreen")}
              >
                <Text>
                  <MessageFilled />
                </Text>

                <Text style={styles.imgInfoText}>0</Text>
              </TouchableOpacity>

              <View style={styles.location}>
                <Text
                  onPress={() => {
                    navigation.navigate("MapScreen");
                  }}
                >
                  <MapPin />
                </Text>

                <Text style={styles.imgInfoText}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },

  profileContainer: {
    alignItems: "center",
    color: "fff",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  avatarProfile: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginBottom: 32,
  },
  itemImage: {
    height: 240,
    //  width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 8,
  },
  imgInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
