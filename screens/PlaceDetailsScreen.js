import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const PlaceDetailsScreen = props => {

  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

PlaceDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('title')
  };
};

const styles = StyleSheet.create({
  
});

export default PlaceDetailsScreen;