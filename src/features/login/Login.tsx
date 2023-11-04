import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import * as Navigation from 'navigation/Navigation';

import {Button} from 'components/Button';
import {CustomTextInput} from 'components/CustomTextInput';
import {PasswordInput} from 'components/PasswordInput';

import images from 'assets/images';
import colors from 'assets/colors';
import strings from 'assets/strings';

import users from 'app/data/users';

import styles from './styles';

function Login(handleLogin: () => void) {
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const librarian = users[0];
  const user = users[1];

  const validateForm = () => {
    if (email == "" && password == "") {
      setErrorEmail(true);
      setErrorPassword(true);
    } else {
      if (email == "") {
        setErrorEmail(true);
        setErrorPassword(false);
      } else if (password == "") {
        setErrorEmail(false);
        setErrorPassword(true);
      } else {
        setErrorEmail(false);
        setErrorPassword(false);

        onLogin();
      }
    }
  }

  const onLogin = () => {
    if ((email == librarian.email || email == user.email) && password == "password") {
      setErrorLogin(false);
    } else {
      setErrorLogin(true);
    }
  }

  return (
    <LinearGradient
      colors={[colors.colorGradientFirst, colors.colorGradientSecond, colors.colorGradientThird]}
      style={styles.container}
    >
      <View style={styles.containerLoginForm}>
        <Image
          style={styles.image}
          source={images.login_illustration}
          resizeMode='contain'
          accessibilityLabel={strings.login_illustration}
          testID={'login-illustration'}
        />
      
        <Text style={styles.loginCaption}>
          {strings.login_caption}
        </Text>

        <CustomTextInput
          onChangeText={(email) => setEmail(email)}
          placeholder={strings.email}
          isError={errorEmail}
          errorMessage={strings.required_field}
          autoCapitalize={'none'}
          testID={'email-input'}
          value={email}
        />

        <PasswordInput
          onChangeText={(password) => setPassword(password)}
          placeholder={strings.password}
          isError={errorPassword}
          errorMessage={strings.required_field}
          testID={'password-input'}
          value={password}
        />

        {
          errorLogin &&
            <View style={styles.containerError}>
              <Text style={styles.textError}>
                {strings.login_failed}
              </Text>
            </View>
        }

        <View style={styles.containerButton}>
          <Button
            caption={strings.login}
            onPress={validateForm}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export default Login;