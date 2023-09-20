import { Pressable } from "react-native";
import Logout from "./Icons/Logout";

const LogoutBtn = () => {
  return (
    <Pressable
      onPress={() => {
        console.log("log out");
      }}
    >
      <Logout />
    </Pressable>
  );
};

export default LogoutBtn;
