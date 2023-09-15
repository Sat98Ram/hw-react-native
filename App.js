import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
// import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <View>
      <RegistrationScreen />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//   },
// });
