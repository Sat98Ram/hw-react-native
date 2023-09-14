import { View, Text, TextInput } from "react-native";

const LoginScreen = () => {
  return (
    <>
      <View></View>
      <View>
        <Text>Увійти</Text>
        <View>
          <TextInput
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
          />
          <TextInput keyboardType="visible-password" placeholder="Пароль" />
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
