import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground>
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
