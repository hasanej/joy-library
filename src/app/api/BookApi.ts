import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({baseUrl: Config.BOOK_API_URL}),
  endpoints: (builder) => ({
    getLoveBook: builder.mutation({
      query: () => ({
        url: `/subjects/love.json`,
        method: 'GET'
      }),
    }),
    getActionBook: builder.mutation({
      query: () => ({
        url: `/subjects/action.json`,
        method: 'GET'
      }),
    }),
    getDevelopmentBook: builder.mutation({
      query: () => ({
        url: `/subjects/development.json`,
        method: 'GET'
      }),
    }),
  }),
});

export const {useBookMutation} = bookApi;