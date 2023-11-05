import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import images from 'assets/images';
import strings from 'assets/strings';

import styles from './styles';

type Props = {
  item: object;
  onPress?: () => void;
  role: string;
}

const ItemBook = (props: Props) => {
  const {item, onPress, role} = props;

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

          {
            role == "librarian" &&
              <View>
                <View style={styles.lineHorizontal} />

                <Text style={styles.titlePickupDate}>
                  {strings.pickup_schedule}
                </Text>

                <Text style={styles.pickupDate}>
                  {strings.pickup_schedule_dummy}
                </Text>
              </View>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ItemBook;