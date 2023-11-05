import React, {useState} from 'react';
import {Text, View, Image, Alert, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as Navigation from 'navigation/Navigation';

import images from 'assets/images';
import strings from 'assets/strings';

import styles from './styles';

function BookList(props) {
  const {book, role} = props.route.params;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const showDatepicker = () => {
    showMode('date');
  }

  const showTimepicker = () => {
    showMode('time');
  }

  const submitForm = () => {
    Alert.alert(
      strings.title_submit_pickup_form,
      `${strings.message_submit_pickup_form} ${date.toString()}`,
      [
        {text: strings.cancel},
        {text: strings.yes, onPress: () => Navigation.pop()},
      ]
    );
  }

  const renderUserContent = () => {
    return (
      <View style={styles.contentUser}>
        <View style={styles.pickupForm}>
          <Text style={styles.pickupTitle}>{strings.pickup_date}</Text>
          <TouchableOpacity style={styles.button} onPress={showDatepicker}>
            <Text style={styles.buttonCaption}>{strings.select_date}</Text>
          </TouchableOpacity>

          <Text style={styles.pickupTitle}>{strings.pickup_time}</Text>
          <TouchableOpacity style={styles.button} onPress={showTimepicker}>
            <Text style={styles.buttonCaption}>{strings.select_time}</Text>
          </TouchableOpacity>

          {
            show &&
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
          }

          <Text style={styles.pickupTitle}>{strings.pickup_schedule}</Text>
          <Text style={styles.pickupSchedule}>{date.toString()}</Text>
        </View>

        <TouchableOpacity style={styles.buttonSubmit} onPress={submitForm}>
          <Text style={styles.buttonSubmitCaption}>{strings.submit}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderLibrarianContent = () => {
    return (
      <View style={styles.contentLibrarian}>
        <Text style={styles.titlePickupDate}>{strings.pickup_schedule}</Text>
        <Text style={styles.pickupDate}>{strings.pickup_schedule_dummy}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          style={styles.bgHeader}
          source={images.book_list_illustration}
          resizeMode={'cover'}
          testID={'bg-header'}
        />

        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => Navigation.pop()}
        >
          <Image
            source={images.left_arrow}
            resizeMode={'contain'}
            style={styles.iconBack}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bookInformation}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookAuthor}>{book.authors[0].name}</Text>
        <Text style={styles.bookEdition}>Edition number {book.edition_count}</Text>

        <View style={styles.lineHorizontal} />
      </View>

      {
        role == "librarian" ? renderLibrarianContent() : renderUserContent()
      }
    </View>
  );
}

export default BookList;