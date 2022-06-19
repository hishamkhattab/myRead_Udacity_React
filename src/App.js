import { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// reducers
import { getAllBooks } from './store/bookSlice';

// pages
import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';
import BookDetailspage from './pages/BookDetailspage';

// styles
import './App.css';

function App() {
  const { isLoading, allBooks, updatedList } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch, updatedList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage booksList={allBooks.filter((book) => book.imageLinks)} load={isLoading} />}
        />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/book/:bookId" element={<BookDetailspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
