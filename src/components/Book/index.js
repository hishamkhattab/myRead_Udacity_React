import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import propsTypes from 'prop-types';

// rducer
import { updateBook } from '../../store/bookSlice';

// style
import './style.css';

function Book({ book }) {
  const { allBooks } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [bookState, setBookState] = useState(book.shelf);

  const handleSelect = (bookData, shelf) => {
    dispatch(updateBook({ book: bookData, shelf }));
    setBookState(shelf);
  };

  useEffect(() => {
    const bookShelf = allBooks.find((item) => item.id === book.id);
    if (bookShelf) {
      setBookState(bookShelf.shelf);
    } else {
      setBookState('none');
    }
  }, [allBooks, book.id]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: `100%`,
            height: `100%`,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
          }}
        />
        <div className="book-shelf-changer">
          <select value={bookState} onChange={({ target }) => handleSelect(book, target.value)}>
            <option value="" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book?.title}</div>
      <div className="book-authors">
        {book?.authors?.map((author, idx) => (
          <p key={idx}>{author}</p>
        ))}
      </div>
      <div className="book-details-btn">
        <button type="button">
          <Link to={`/book/${book.id}`}>More details</Link>
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: propsTypes.object,
};

export default Book;
