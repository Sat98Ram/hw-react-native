import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: { paddingTop: 9, height: 56, backgroundColor: "#fff" },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Posts") {
              iconName = "grid-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            if (route.name === "CreatePosts") {
              return (
                <View
                  style={{
                    backgroundColor: "#FF6C00",
                    width: 70,
                    height: 40,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    name={"add-outline"}
                    size={size}
                    color={"#FFFFFF"}
                  />
                </View>
              );
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#212121CC",
          tabBarInactiveTintColor: "#212121CC",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{
            tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
