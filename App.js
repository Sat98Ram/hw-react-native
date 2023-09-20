import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import LogoutBtn from "./Components/LogoutBtn";
import { useFonts } from "expo-font";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="HomeScreen"
          component={Home}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "Posts";

            switch (routeName) {
              case "Posts": {
                return {
                  headerTitle: "Публікації",
                  headerStyle: {
                    backgroundColor: "#FFFFFF",
                  },
                  headerTitleStyle: {
                    fontFamily: "Roboto-Medium",
                    fontSize: 17,
                  },
                  headerRight: LogoutBtn,
                };
              }
              case "CreatePosts": {
                return {
                  headerTitle: "Створити публікацію",
                };
              }
              case "Profile":
              default: {
                return {
                  headerShown: false,
                };
              }
            }
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
