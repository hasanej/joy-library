import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigation} from 'navigation/Navigation';

import {Splash} from 'features/splash';

const Stack = createStackNavigator();

const navigationContainer = () => {
  return (
    <NavigationContainer ref={navigation}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

export default navigationContainer;
