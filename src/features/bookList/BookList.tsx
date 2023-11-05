import React, {useState, useEffect} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';

import * as Navigation from 'navigation/Navigation';

import images from 'assets/images';
import strings from 'assets/strings';

import {useGetBooksQuery} from 'app/api/BookApi';

import {ItemBook} from './components/ItemBook'
import {PrevButton} from './components/PrevButton'
import {NextButton} from './components/NextButton'
import {LoadingPlaceholder} from './components/LoadingPlaceholder'

import bookGenres from 'app/data/bookGenres';

import styles from './styles';

function BookList() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [bookGenre, setBookGenre] = useState(bookGenres[0].value);
  const [pagedBookList, setPagedBookList] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const {
    isSuccess: isGetBookSuccess,
    data: bookList = [],
    refetch: refetchBook,
    isFetching: isFetchingBook
  } = useGetBooksQuery(bookGenre);

  useEffect(() => {
    getUserData();

    if (!isFetchingBook && isGetBookSuccess) {
      const data = bookList.works;
      const totalPage = Math.ceil(data.length / 4);

      setPagedBookList(data.slice(startIndex, endIndex));
      setTotalPage(totalPage);
    }
  }, [isFetchingBook]);

  useEffect(() => {
    if (currentPage == 1) {
      setShowPrevButton(false);
      setShowNextButton(true);
    } else if (currentPage == totalPage) {
      setShowPrevButton(true);
      setShowNextButton(false);
    } else {
      setShowPrevButton(true);
      setShowNextButton(true);
    }
  });

  useEffect(() => {
    refetchBook();

    setStartIndex(0);
    setEndIndex(4);
    setCurrentPage(1);
  }, [bookGenre]);

  const getUserData = async() => {
    const userName = await AsyncStorage.getItem("userName");
    const userEmail = await AsyncStorage.getItem("userEmail");
    const userRole = await AsyncStorage.getItem("userRole");

    setName(userName);
    setEmail(userEmail);
    setRole(userRole);
  }

  const bookDetail = (book: object) => {
    Navigation.navigate('BookDetail', {book, role});
  }

  const prevData = () => {
    const data = bookList.works;
    
    setPagedBookList(data.slice(startIndex - 4, endIndex - 4));
    setStartIndex(startIndex - 4);
    setEndIndex(endIndex - 4);
    setCurrentPage(currentPage - 1);
  }

  const nextData = () => {
    const data = bookList.works;

    setPagedBookList(data.slice(startIndex + 4, endIndex + 4));
    setStartIndex(startIndex + 4);
    setEndIndex(endIndex + 4);
    setCurrentPage(currentPage + 1);
  }

  const logout = async() => {
    await AsyncStorage.clear().then(() => {
      Navigation.replace('Login');
    });
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

        <View style={styles.containerWelcome}>
          <Text style={styles.captionName}>{`Welcome, ${name}!`}</Text>
          <Text style={styles.captionEmail}>{email}</Text>
        </View>

        <TouchableOpacity onPress={logout} style={styles.buttonLogout}>
          <Image
            style={styles.iconLogout}
            source={images.logout}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.captionBookGenre}>{strings.book_genre}</Text>

      <Dropdown
        style={styles.dropdown}
        data={bookGenres}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={bookGenre}
        onChange={item => {
          setBookGenre(item.value);
        }}
      />

      <View style={styles.containerBookList}>
        {
          isFetchingBook
          ?
            <LoadingPlaceholder />
          :
            <FlatList
              data={pagedBookList}
              renderItem={
                ({item}) => <ItemBook item={item} onPress={() => bookDetail(item)} role={role} />
              }
              keyExtractor={item => item.key}
            />
        }
      </View>

      {
        !isFetchingBook &&
          <View style={styles.containerButtons}>
            {showPrevButton && <PrevButton onPress={prevData} />}
            {showNextButton && <NextButton onPress={nextData} />}
          </View>
      }
    </View>
  );
}

export default BookList;