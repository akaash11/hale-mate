import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from '../components';
import {
  WHITE
} from "../assets/styles";

export default function CameraComponent({ onImageChange }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
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
      aspect: [9, 16],
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
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.camera}
          type={type}
          ratio={'16:9'}
        >
          <View style={{ flex: 1 , padding:10}}>
          <Text style={{color: '#FFFFFF', fontSize: 24, padding:16, fontWeight:'bold'}}>What you eating today? Lets see if its healthy!</Text>
            <View style={{ flex: 1 }}>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }} >
              <Icon name="camera-reverse-outline" color={WHITE} size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => takePicture()} >
              <Icon name="camera-outline" color={WHITE} size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pickImage()} >
              <Icon name="image-outline" color={WHITE} size={50} />
            </TouchableOpacity></View>  
          </View>
        </Camera>
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
    flex: 1,
    marginTop: 40,
  },
  button: {
    flex: 1,
  },
});