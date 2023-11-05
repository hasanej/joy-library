import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import images from 'assets/images';
import styles from './styles';

type Props = {
  item: object;
  onPress?: () => void;
}

const ItemBook = (props: Props) => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        <Image
          style={styles.bookIcon}
          source={images.item_book}
          resizeMode={'contain'}
        />

        <View style={styles.containerBookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.authors[0].name}</Text>
          <Text style={styles.bookEdition}>{`Edition Number ${item.edition_count}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ItemBook;