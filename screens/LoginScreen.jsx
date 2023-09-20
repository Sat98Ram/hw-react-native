import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { Link } from "@react-navigation/native";

import background1x from "../assets/images/bg1x.jpg";
import background2x from "../assets/images/bg2x.jpg";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const signIn = () => {
    const logedinUser = { password, email };
    console.log(logedinUser);
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={(background1x, background2x)}
        style={styles.background}
      >
        <View style={styles.loginContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ alignItems: "center" }}
          >
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Адреса електронної пошти"
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              keyboardType="visible-password"
              placeholder="Пароль"
              style={styles.passwordInput}
            />
            <Text style={styles.showPassword}>Показати</Text>
          </KeyboardAvoidingView>

          <Pressable
            onPress={signIn}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#ff8833" : "#FF6C00",
              },
              styles.buttonLogin,
            ]}
          >
            <Text style={styles.buttonText}>Увійти</Text>
          </Pressable>
          <Text style={styles.link}>
            Немає акаунту?
            <Text onPress={() => navigation.navigate("RegistrationScreen")}>
              {" "}
              Зареєструватися
            </Text>
          </Text>
          <View style={styles.bottom}>
            <View style={styles.line}></View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    top: 156,
    right: 16,
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
  linkTo: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
