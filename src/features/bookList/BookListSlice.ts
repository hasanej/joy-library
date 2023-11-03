import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface BookListState {
  bookList: Array<object>
}

const initialState: BookListState = {
  bookList: []
}

export const bookListSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    setBookList: (state, action: PayloadAction<Array<object>>) => {
      state.bookList = action.payload
    },
  },
})

export const {setBookList} = bookListSlice.actions

export default bookListSlice.reducer