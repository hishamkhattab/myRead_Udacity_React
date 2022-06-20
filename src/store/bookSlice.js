import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as bookAPI from '../BooksAPI';

export const getAllBooks = createAsyncThunk('books/getAll', async (_, thunkAPI) => {
  const { rejecWithValue } = thunkAPI;

  try {
    const data = bookAPI.getAll();
    return data;
  } catch (error) {
    return rejecWithValue(error.message);
  }
});

export const getSingleBook = createAsyncThunk('books/getSingleBook', async (bookID, thunkAPI) => {
  const { rejecWithValue } = thunkAPI;

  try {
    const data = bookAPI.get(bookID);
    return data;
  } catch (error) {
    return rejecWithValue(error.message);
  }
});

export const searchBook = createAsyncThunk('books/searchBook', async ({ query, maxResult }, thunkAPI) => {
  const { rejecWithValue } = thunkAPI;

  try {
    if (query === '') return [];
    const data = bookAPI.search(query, maxResult);
    return data;
  } catch (error) {
    return rejecWithValue(error.message);
  }
});

export const updateBook = createAsyncThunk('books/updateBook', async ({ book, shelf }, thunkAPI) => {
  const { rejecWithValue } = thunkAPI;

  try {
    bookAPI.update(book, shelf);
    return { book, shelf };
  } catch (error) {
    return rejecWithValue(error.message);
  }
});

const initialState = {
  isLoading: true,
  allBooks: [],
  searchBookList: [],
  bookData: {},
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    // get all the books
    builder.addCase(getAllBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allBooks = action.payload;
    });
    builder.addCase(getAllBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.allBooks = [];
      state.error = action.payload;
    });

    // get single book details
    builder.addCase(getSingleBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookData = action.payload;
    });
    builder.addCase(getSingleBook.rejected, (state, action) => {
      state.isLoading = false;
      state.bookData = [];
      state.error = action.payload;
    });

    // get searched books
    builder.addCase(searchBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchBookList = action.payload;
    });
    builder.addCase(searchBook.rejected, (state, action) => {
      state.isLoading = false;
      state.searchBookList = [];
      state.error = action.payload;
    });

    // get updated list of books in the shelf
    builder.addCase(updateBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allBooks = [
        ...state.allBooks.filter((book) => book.id !== action.payload.book.id),
        { ...action.payload.book, shelf: action.payload.shelf },
      ];
    });
    builder.addCase(updateBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;
