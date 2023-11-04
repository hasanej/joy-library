import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type Props = {
  caption: string;
  onPress?: () => void;
  testID: string;
}

const Button = (props: Props) => {
  const {caption, onPress, testID} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID={testID}
    >
      <Text style={styles.caption}>{caption}</Text>
    </TouchableOpacity>
  );
}

export default Button;