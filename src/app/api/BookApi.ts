import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({baseUrl: Config.BOOK_API_URL}),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (genre = "love") => `/subjects/${genre}.json`
    })
  })
});

export const {useGetBooksQuery} = bookApi;