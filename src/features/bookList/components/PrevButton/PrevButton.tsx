import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

import images from 'assets/images';
import strings from 'assets/strings';

import styles from './styles';

type Props = {
  onPress?: () => void;
}

const PrevButton = (props: Props) => {
  const {onPress} = props;

  return (
    <TouchableOpacity style={styles.buttonPrev} onPress={onPress}>
      <Image source={images.previous} resizeMode={'contain'} style={styles.iconPrev} />
      <Text style={styles.captionButton}>{strings.previous}</Text>
    </TouchableOpacity>
  );
}

export default PrevButton;