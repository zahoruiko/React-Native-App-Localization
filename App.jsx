import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuPage from './pages/MenuPage';
import ContentPage from './pages/ContentPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={MenuPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Content" 
          component={ContentPage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
