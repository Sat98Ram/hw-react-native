import { View, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostsScreen;
