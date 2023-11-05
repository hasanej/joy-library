import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

import images from 'assets/images';
import strings from 'assets/strings';

import styles from './styles';

type Props = {
  onPress?: () => void;
}

const nextButton = (props: Props) => {
  const {onPress} = props;

  return (
    <TouchableOpacity style={styles.buttonNext} onPress={onPress}>
      <Text style={styles.captionButton}>{strings.next}</Text>
      <Image source={images.next} resizeMode={'contain'} style={styles.iconNext} />
    </TouchableOpacity>
  );
}

export default nextButton;