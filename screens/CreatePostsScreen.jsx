import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import CameraIcon from "../Components/Icons/CameraIcon";
import MapPin from "../Components/Icons/MapPin";

const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const [fontsLoaded] = useFonts({
  //   "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  //   "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  //   "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          <View style={styles.photoView}>
            <TouchableOpacity
              style={styles.flipContainer}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              {/* <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Flip
            </Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                }
              }}
            >
              <View style={styles.takePhotoOut}>
                <CameraIcon />
                {/* <View style={styles.takePhotoInner}></View> */}
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>

      <Text style={styles.textRedact}>Редагувати фото</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.inputName}
          keyboardType="default"
          placeholder="Назва..."
        />
        <TextInput style={styles.inputLocation} placeholder="Місцевість..." />
        <Text style={styles.mapIcon}>
          <MapPin />
        </Text>
      </KeyboardAvoidingView>

      <Pressable
        onPress={console.log("publish")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#FF6C00" : "#F6F6F6",
          },
          styles.buttonPublish,
        ]}
      >
        <Text style={styles.buttonText}>Опубліковати</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  cameraContainer: {
    height: 240,
    marginBottom: 8,
    backgroundColor: "#F6F6F6",
    // objectFit: "contain",
    border: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  camera: {
    height: 240,
    // objectFit: "contain",
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    backgroundColor: "#FFFFFF4D",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  // takePhotoInner: {
  //   borderWidth: 2,
  //   borderColor: "white",
  //   height: 40,
  //   width: 40,
  //   backgroundColor: "white",
  //   borderRadius: 50,
  // },

  textRedact: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  buttonPublish: {
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  inputName: {
    borderBottom: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: "100%",
  },
  inputLocation: {
    borderBottom: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: "100%",
    paddingLeft: 28,
  },
  mapIcon: {
    position: "absolute",
    top: 79,
  },
});

export default CreatePostsScreen;
