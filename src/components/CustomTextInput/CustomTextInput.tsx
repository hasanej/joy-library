import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './styles';

type Props = {
  placeholder: string;
  isError: boolean;
  errorMessage: string;
  autoCapitalize: any;
  onChangeText?: () => void;
  testID: string;
  value: string;
}

const CustomTextInput = (props: Props) => {
  const {
    placeholder, isError, errorMessage, autoCapitalize, onChangeText, testID, value
  } = props;

  return (
    <View>
      {
        isError &&
          <Text style={styles.errorMessage}>{errorMessage}</Text>
      }

      <View style={[
        styles.container,
        isError ? styles.borderError : styles.border
      ]}>
        <TextInput
          style={styles.caption}
          placeholder={placeholder}
          onChangeText={(val) => onChangeText(val)}
          autoCapitalize={autoCapitalize}
          testID={testID}
          value={value}
        />
      </View>
    </View>
  );
}

export default CustomTextInput;