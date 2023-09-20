import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Home;
