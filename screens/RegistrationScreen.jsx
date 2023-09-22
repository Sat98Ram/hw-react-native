import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import uuid from "react-native-uuid";

import background1x from "../assets/images/bg1x.jpg";
import background2x from "../assets/images/bg2x.jpg";
import UnionIcon from "../Components/Icons/Union";

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
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

  const signUp = () => {
    const id = uuid.v4();
    const user = { id, login, password, email };

    console.log(user);

    navigation.navigate("HomeScreen");

    setLogin("");
    setEmail("");
    setPassword("");
  };

  const keyboardVerticalOffset = Platform.OS === "ios" ? 150 : 150;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={(background1x, background2x)}
        style={styles.background}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.registerContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              keyboardVerticalOffset={keyboardVerticalOffset}
              style={{ alignItems: "center" }}
            >
              <View style={styles.avatar}>
                <Pressable style={styles.addAvatar}>
                  <UnionIcon />
                </Pressable>
              </View>
              <Text style={styles.title}>Реєстрація</Text>

              <TextInput
                value={login}
                onChangeText={setLogin}
                keyboardType="default"
                placeholder="Логін"
                style={styles.input}
              />
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
              onPress={signUp}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#ff8833" : "#FF6C00",
                },
                styles.buttonRegister,
              ]}
            >
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </Pressable>
            <Text style={styles.link}>
              Вже є акаунт?
              <Text onPress={() => navigation.navigate("LoginScreen")}>
                {" "}
                Увійти
              </Text>
            </Text>
            <View style={styles.bottom}>
              <View style={styles.line}></View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  registerContainer: {
    alignItems: "center",
    color: "fff",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 92,
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
    top: 222,
    right: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  buttonRegister: {
    borderRadius: 100,
    paddingVertical: 16,
    marginBottom: 16,
    alignItems: "center",
    width: "100%",
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
    marginBottom: 45,
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
  avatar: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -152,
  },
  addAvatar: {
    position: "absolute",
    right: -12,
    top: 81,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 999,
    width: 25,
    height: 25,
  },
});
