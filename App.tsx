import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';

import NavigationContainer from 'navigation/NavigationContainer';
import {store} from 'app/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView style={{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
      }}>
        <NavigationContainer />
      </SafeAreaView>
    </Provider>
  );
}

export default App;