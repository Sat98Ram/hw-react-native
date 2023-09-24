import { Provider, useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import CommentsScreen from "./screens/CommentsScreen";
import MapScreen from "./screens/MapScreen";
import LogoutBtn from "./Components/LogoutBtn";
import store from "./redux/store";
import { selectIsAuth } from "./redux/auth/selectors";

const MainStack = createStackNavigator();

export default function App() {
  // const isAuth = useSelector(selectIsAuth);

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      {/* <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      > */}
      <View style={styles.container}>
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
              name="CommentsScreen"
              component={CommentsScreen}
              options={{
                headerTitle: "Коментарі",
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Roboto-Medium",
                  fontSize: 17,
                },
              }}
            />
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                title: "Геолокація",
                headerTitleAlign: "center",
              }}
            />
            <MainStack.Screen
              name="HomeScreen"
              component={Home}
              options={({ route }) => {
                const routeName =
                  getFocusedRouteNameFromRoute(route) ?? "Posts";

                switch (routeName) {
                  case "Posts": {
                    return {
                      headerTitle: "Публікації",
                      headerTitleAlign: "center",
                      headerStyle: {
                        backgroundColor: "#FFFFFF",
                      },
                      headerTitleStyle: {
                        fontFamily: "Roboto-Medium",
                        fontSize: 17,
                      },
                      headerRight: LogoutBtn,
                      headerRightContainerStyle: {
                        padding: 10,
                      },
                    };
                  }
                  case "CreatePosts": {
                    return {
                      headerTitle: "Створити публікацію",
                      headerTitleAlign: "center",
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
      </View>
      {/* </PersistGate> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
