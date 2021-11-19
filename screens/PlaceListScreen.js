import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/CustomHeaderButton';

const PlaceListScreen = props => {

  return (
    <View>
      <Text>List</Text>
    </View>
  );
}

PlaceListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title='NewPlace' 
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'} 
          onPress={() => navData.navigation.navigate('NewPlace')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  
});

export default PlaceListScreen;