import { View, Text, TextInput, ImageBackground, Button } from "react-native";
import background1x from "../assets/images/bg1x.jpg";
import background2x from "../assets/images/bg2x.jpg";

const LoginScreen = () => {
  return (
    <ImageBackground source={background1x}>
      <View></View>
      <View>
        <Text>Увійти</Text>
        <View>
          <TextInput
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
          />
          <TextInput keyboardType="visible-password" placeholder="Пароль" />
          <Button title="Увійти" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
