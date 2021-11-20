import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  Alert
} from 'react-native';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImageSelector = props => {
  const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
    if(result.status !== 'granted') {
      Alert.alert(
        'Insufficient Permissions',
        'You need to grant camera permissions to use this app',
        [{text: 'Ok'}]
      );
      return false;
    }
    return true;
  }

  const takeImgHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if(!hasPermissions) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(image.uri);
  }

  return (
    <View style={styles.imgPicker}>
      <View style={styles.preview}>
        {!pickedImage ? (
          <Text>No image picked yet</Text>
        ) : (
        <Image style={styles.img} source={{uri: pickedImage}} />
        )}
      </View>
      <Button 
        title="Take image" 
        color={Colors.primary} 
        onPress={takeImgHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center'
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc'
  },
  img: {
    width: '100%',
    height: '100%'
  }
});

export default ImageSelector;