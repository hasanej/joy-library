import React from 'react';
import {View} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const LoadingPlaceholder = () => {
  return (
    <View style={styles.container}>
      <ShimmerPlaceholder style={styles.placeholder}/>
      <ShimmerPlaceholder style={styles.placeholder}/>
      <ShimmerPlaceholder style={styles.placeholder}/>
    </View>
  );
}

export default LoadingPlaceholder;