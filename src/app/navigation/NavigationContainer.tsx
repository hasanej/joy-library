import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigation} from 'navigation/Navigation';

import {Splash} from 'features/splash';
import {Login} from 'features/login';
import {BookList} from 'features/bookList';
import {BookDetail} from 'features/bookDetail';

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
        <Stack.Screen 
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen 
          name="BookList"
          options={{headerShown: false}}
          component={BookList}
        />
        <Stack.Screen 
          name="BookDetail"
          options={{headerShown: false}}
          component={BookDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

export default navigationContainer;
