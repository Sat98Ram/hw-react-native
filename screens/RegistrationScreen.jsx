import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import background1x from "../assets/images/bg1x.jpg";
import background2x from "../assets/images/bg2x.jpg";

const RegistrationScreen = () => {
  return (
    // <SafeAreaView>
    <ImageBackground
      source={(background1x, background2x)}
      style={styles.background}
    >
      <View></View>
      <View style={styles.registerContainer}>
        <Text style={styles.title}>Реєстрація</Text>
        <View>
          <TextInput
            keyboardType="default"
            placeholder="Логін"
            style={styles.input}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />
          <TextInput
            keyboardType="visible-password"
            placeholder="Пароль"
            style={styles.input}
          />
          <Button title="Зареєстуватися" style={styles.buttonRegister} />
        </View>
      </View>
    </ImageBackground>
    // </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    // flex: 1,
    justifyContent: "flex-end",
  },
  registerContainer: {
    // height: 549,
    color: "fff",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 100,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    height: 30,
    textAlign: "center",
    marginBottom: 33,
  },
  input: {
    backgroundColor: "rgba(246, 246, 246, 1)",
    marginBottom: 16,
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 8,
    // paddingTop: 16,
    // paddingBottom: 15,
  },
  buttonRegister: {
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 8,
    paddingVertical: 16,
    // alignItems: "center",
  },
});
