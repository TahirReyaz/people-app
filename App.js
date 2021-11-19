import React from 'react';
import { enableScreens } from 'react-native-screens'

import PlacesNavigator from './navigation/Navigator';

enableScreens();

export default function App() {
  return (
    <PlacesNavigator />
  );
}
