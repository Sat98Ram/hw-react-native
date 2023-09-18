import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import background1x from "../assets/images/bg1x.jpg";
import background2x from "../assets/images/bg2x.jpg";

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "#fff" }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flex: 1 }}
      scrollEnabled={true}
    >
      <ImageBackground
        source={(background1x, background2x)}
        style={styles.background}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />
          <TextInput
            keyboardType="visible-password"
            placeholder="Пароль"
            style={styles.passwordInput}
          />
          <Text style={styles.showPassword}>Показати</Text>
          <Pressable
            onPress={() => {
              console.log("register button");
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#ff8833" : "#FF6C00",
              },
              styles.buttonLogin,
            ]}
          >
            <Text style={styles.buttonText}>Увійти</Text>
          </Pressable>
          <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
          <View style={styles.bottom}>
            <View style={styles.line}></View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },

  loginContainer: {
    alignItems: "center",
    color: "fff",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginBottom: 33,
  },

  input: {
    width: 343,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },

  passwordInput: {
    width: 343,
    backgroundColor: "#F6F6F6",
    marginBottom: 43,
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    position: "relative",
  },

  showPassword: {
    position: "absolute",
    top: 188,
    right: 40,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  buttonLogin: {
    width: "100%",
    borderRadius: 100,
    paddingVertical: 16,
    marginBottom: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },

  link: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginBottom: 111,
  },

  bottom: {
    height: 34,
    paddingBottom: 8,
    paddingTop: 21,
  },

  line: {
    alignItems: "center",
    backgroundColor: "#212121",
    height: 5,
    width: 134,
    borderRadius: 8,
  },
});
