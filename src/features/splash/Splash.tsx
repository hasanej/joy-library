import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Navigation from 'navigation/Navigation';

import images from 'assets/images';

import styles from './styles';

function Splash() {
  useEffect(() => {
    checkIsLogin();
  });

  const checkIsLogin = async() => {
    const isLogin = await AsyncStorage.getItem("isLogin");

    const splashTimer = setTimeout(() => {
      if (isLogin === "true" && isLogin !== null) {
        // Navigation.replace('BookList');
      } else {
        Navigation.replace('Login');
      }
    }, 3000);

    return () => {
      clearTimeout(splashTimer);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={images.book}
        resizeMode='contain'
      />
    </View>
  );
}

export default Splash;