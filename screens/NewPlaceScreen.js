import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';
import ImageSelector from '../components/ImageSelector';

const NewPlaceScreen = props => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitle(text);
  }

  const submitHandler = () => {
    dispatch(placesActions.addPlace(title));
    props.navigation.navigate('Places');
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={text => titleChangeHandler(text)} 
          value={title}
        />
        <ImageSelector />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={submitHandler}
        />
      </View>
    </ScrollView>
  );
}

NewPlaceScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default NewPlaceScreen;