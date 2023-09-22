import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Pressable, Text, View } from "react-native";
import LogoutBtn from "../Components/LogoutBtn";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

// const logout = () => {
//   return (
//     <Pressable>
//       <Text>Logout</Text>
//     </Pressable>
//   );
// };

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //     tabBarOptions={{
        //   activeTintColor: "#212121CC",
        //   inactiveTintColor: "#212121CC",
        // }},
        tabBarShowLabel: false,
        tabBarStyle: { paddingTop: 9 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = "grid-outline";
          } else if (route.name === "CreatePosts") {
            iconName = "add-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
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
  );
};

export default Home;
