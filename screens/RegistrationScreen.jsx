import { View, Text, TextInput } from "react-native";

const RegistrationScreen = () => {
  return (
    <>
      <View></View>
      <View>
        <Text>Реєстрація</Text>
        <View>
          <TextInput placeholder="Логін" />
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

export default RegistrationScreen;
