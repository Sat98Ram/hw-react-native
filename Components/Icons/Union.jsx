import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const UnionIcon = () => {
  return (
    <View style={styles.container}>
      <Svg
        width={13}
        height={13}
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 0H6V6H0V7H6V13H7V7H13V6H7V0Z"
          fill="#FF6C00"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UnionIcon;
