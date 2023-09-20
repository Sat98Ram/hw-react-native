import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Pressable, Text } from "react-native";
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
        // tabBarVisible: ((route) => {
        //   const routeName = getFocusedRouteNameFromRoute(route) ?? "";
        //   if (routeName === "CreatePosts") {
        //     return false;
        //   }
        //   return true;
        // })(route),
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
          // tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Home;
