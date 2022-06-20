import propsTypes from 'prop-types';
// components
import Book from '../Book';

// style
import './style.css';

function BookShelf({ title = '', bookList = [] }) {
  return (
    <div className="bookshelf">
      {title !== '' && <h2 className="bookshelf-title">{title}</h2>}
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList.map((book, idx) => (
            <Book key={idx} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propsTypes = {
  title: propsTypes.string,
  bookList: propsTypes.array,
};

export default BookShelf;
