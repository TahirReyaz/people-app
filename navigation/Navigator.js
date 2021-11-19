// import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
// import { Ionicons } from '@expo/vector-icons';
// import { useDispatch } from 'react-redux';

import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen';
import PlaceListScreen from '../screens/PlaceListScreen';
import Colors from '../constants/Colors';

const PlacesStackNavigator = createStackNavigator({
  Places: PlaceListScreen,
  Details: PlaceDetailsScreen,
  NewPlace: NewPlaceScreen,
  Map: MapScreen
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default createAppContainer(PlacesStackNavigator);