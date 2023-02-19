import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
export default function CameraComponent({onImageChange}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const  cameraStatus  = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      const  galleryStatus  = await   ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted')
})();
  }, []);
const takePicture = async () => {
    if(camera){
      const data = await camera.takePictureAsync(null);
      console.log(data.uri)
      setImage(data.uri)
      onImageChange(data.uri)
    }
  }
const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
});
console.log(result);
if (!result.cancelled) {
      setImage(result.uri);
      onImageChange(data.uri)
    }
};
if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
}
if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
}
return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera 
          ref={ref => setCamera(ref)} 
          style={styles.camera} 
          type={type} 
          ratio={'16:9'} 
        />
      </View>
      
      <Button
        style={styles.button}
        title="Flip Image"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}>
      </Button>
      
      <Button title="Take Picture" onPress={() => takePicture()} />
      <Button title="Pick an Image From Gallery" onPress={() => pickImage()} />
      {/* {image && <Image source={{uri: image}} style={{flex:1}} />} */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  cameraContainer: {
    flex: 1
  },
  button: {
    flex: 1,
  },
});